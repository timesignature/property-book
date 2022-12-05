<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function insertMany(){
        $data=[
            [
                'title'=>'Refreshing Designs',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
            [
                'title'=>'Solid Bootstrap 5',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
            [
                'title'=>'100+ components',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
            [
                'title'=>'Speed Optimised',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
            [
                'title'=>'Fully Customisable',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
            [
                'title'=>'Regular Updates',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Architecto aspernatur deleniti impedit sint soluta ullam?'
            ],
        ];
        return DB::table('services')->insert($data);
    }


    public function get(){
        $s=Service::all();
        if($s->count()===0){
            $this->insertMany();
        }

        return Service::all();
    }


    public function edit(Request $request,$id){
        $this->validate($request,[
            'description'=>'required',
            'title'=>'required|unique:services,'.$id
        ]);

        $d=Service::where('id',$id)->first();
        $d->title=$request->title;
        $d->description=$request->description;
        $d->update();
        return $d;
    }
}
