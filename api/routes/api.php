<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products',['App\Http\Controllers\ProductController','get']);
Route::get('/products/{id}',['App\Http\Controllers\ProductController','getOne']);
Route::post('/products',['App\Http\Controllers\ProductController','add']);
Route::put('/products/{id}',['App\Http\Controllers\ProductController','edit']);



Route::get('/services',['App\Http\Controllers\ServiceController','get']);
Route::put('/services/{id}',['App\Http\Controllers\ServiceController','edit']);



Route::get('/stories',['App\Http\Controllers\StoryController','get']);


Route::post('/register',['App\Http\Controllers\UserController','register']);

Route::post('/login',['App\Http\Controllers\UserController','login']);
