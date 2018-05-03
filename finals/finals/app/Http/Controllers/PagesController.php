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

    public function about() {
        $title = 'About Us';
        return view('pages.about')-> with('title', $title);
    }
    public function profile() {
        $title = 'Profile';
        return view('pages.profile')-> with('title', $title);
    }
    public function java() {
        $title = 'Java';
        return view('pages.java')-> with('title', $title);
    }
    public function php() {
        $title = 'PHP';
        return view('pages.php')-> with('title', $title);
    }
    public function node() {
        $title = 'Node.Js';
        return view('pages.node')-> with('title', $title);
    }
}
