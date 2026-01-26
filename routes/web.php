<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', fn() => Inertia::render('Home/Home'))->name('home');
Route::get('/about', fn() => Inertia::render('AboutUs/AboutUs'))->name('about-us');
Route::get('/company-profile', fn() => Inertia::render('CompanyProfile/CompanyProfile'))->name('company-profile');
Route::get('/contact', fn() => Inertia::render('Contact/Contact'))->name('contact');
Route::get('/products', fn() => Inertia::render('Products/Products'))->name('products.index');
Route::get('/articles', fn() => Inertia::render('Articles/Articles'))->name('articles.index');
Route::get('/events', fn() => Inertia::render('Events/Events'))->name('events.index');
Route::get('/galleries', fn() => Inertia::render('Galleries/Galleries'))->name('galleries.index');
Route::get('/clients', fn() => Inertia::render('Clients/Clients'))->name('clients.index');

require __DIR__ . '/auth.php';
