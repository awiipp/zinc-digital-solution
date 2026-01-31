<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\Framework\ComparisonMethodDoesNotDeclareExactlyOneParameterException;

Route::get('/', fn() => redirect()->to('home'));

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

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::get('/products/table', [ProductController::class, 'table'])->name('products.table');

Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/table', [ArticleController::class, 'table'])->name('articles.table');
Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('/events', [EventController::class, 'index'])->name('events.index');
Route::get('/events/table', [EventController::class, 'table'])->name('events.table');
Route::get('/events/create', [EventController::class, 'create'])->name('events.create');

Route::get('/galleries', [GalleryController::class, 'index'])->name('galleries.index');
Route::get('/galleries/table', [GalleryController::class, 'table'])->name('galleries.table');
Route::get('/galleries/create', [GalleryController::class, 'create'])->name('galleries.create');

Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::get('/clients/table', [ClientController::class, 'table'])->name('clients.table');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');

Route::get('/orders', [OrderController::class, 'index'])->name('orders.index'); // TO BE CONTINUE
Route::get('/orders/create', [OrderController::class, 'create'])->name('orders.create'); // TO BE CONTINUE

Route::get('/messages', fn() => Inertia::render('Messages/Messages'))->name('messages.index');

require __DIR__ . '/auth.php';
