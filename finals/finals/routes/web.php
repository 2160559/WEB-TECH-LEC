<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PagesController@index')->name('home');
Route::get('/quiz', 'PagesController@quiz')->name('quiz');
Route::get('/about', 'PagesController@about')->name('about');
Route::get('/profile', 'PagesController@profile')->name('profile');
ROUTE::get('/java', 'PagesController@java')->name('java');
ROUTE::get('/php', 'PagesController@php')->name('php');
ROUTE::get('/node', 'PagesController@node')->name('node');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
