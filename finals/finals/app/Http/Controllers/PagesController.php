<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
		$title = 'Home';
		return view('pages.index')-> with('title', $title);
	}

	public function quiz() {
        $title = 'Quiz';
        return view('pages.quiz')-> with('title', $title);
    }
    public function login() {
        $title = 'Login';
        return view('pages.login')-> with('title', $title);
    }
}
