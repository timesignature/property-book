<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function get(){
        $products=Product::all();
        if($products->count()==0){
            $this->insertMany();
        }

        return Product::all();
    }

    public function getOne($id){
        return Product::where('id',$id)->first();
    }


    public function edit(Request $request,$id){
        $this->validate($request,[
            'price'=>'required|numeric',
            'description'=>'required',
            'title'=>'required'
        ]);

        $d=Product::where('id',$id)->first();
        $d->price=$request->price;
        $d->title=$request->title;
        $d->description=$request->description;
        $d->update();
        return $d;
    }



    public function insertMany(){
        $data=[

            [
               'title'=>'Starter',
               'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
               'price'=>'0',
                'isMain'=>'0',
            ],
            [
                'title'=>'Exclusive',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'price'=>'90',
                'isMain'=>'1',
            ],
            [
                'title'=>'Premium',
                'description'=>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                'price'=>'150',
                'isMain'=>'0',
            ],
        ];

        return DB::table('products')->insert($data);
    }

    public function insertOptions(){
        $data=[
            [
                'title'=>'Crus justo odio'
            ],

            [
                'title'=>'Dapibus ac facilisis in'
            ],

            [
                'title'=>'Crus justo odio'
            ],

            [
                'title'=>'Morbi leo risus'
            ],
        ];
        return DB::table('options')->insert($data);

    }
}
