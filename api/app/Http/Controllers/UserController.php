<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function login(Request $request){
        $this->validate($request,[
            'email'=>'required|email|exists:users',
            'password'=>'required|min:8',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }



        return $user->api_token;
    }


    public function register(Request $request){
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:8',
            'confirm_password'=>'same:password',
        ]);

        $d=new User();
        $d->name=$request->name;
        $d->email=$request->email;
        $d->api_token=Str::random(60);
        $d->password=Hash::make($request->password);
        $d->Save();

        return $d;

    }
}
