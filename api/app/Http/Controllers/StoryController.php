<?php

namespace App\Http\Controllers;

use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StoryController extends Controller
{
    public function insertMany(){
        $data=[
            [
                'image'=>'a.jpg',
                'title'=>'Who we are',
                'description'=>'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum omnis, quae quasi saepe</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum</p>'
            ],
            [
                'image'=>'b.jpg',
                'title'=>'Our vision',
                'description'=>'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum omnis, quae quasi saepe</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum</p>'
            ],
            [

                'image'=>'c.jpg',
                'title'=>'Our History',
                'description'=>'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum omnis, quae quasi saepe</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dignissimos perferendis rerum ullam vero. Ad autem culpa, delectus eligendi in, labore laboriosam modi non nostrum</p>'
            ],
        ];

        return DB::table('stories')->insert($data);
    }

    public function get(){
        $s=Story::all();
        if($s->count()==0){
            $this->insertMany();
        }


        return Story::all();
    }
}
