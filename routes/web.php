<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn() => redirect()->to('home'));

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/table', [ProductController::class, 'table'])->name('products.table');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::get('/products/{code}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{code}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/{code}', [ProductController::class, 'destroy'])->name('products.destroy');

    Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
    Route::get('/articles/table', [ArticleController::class, 'table'])->name('articles.table');
    Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
    Route::get('/articles/{slug}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
    Route::put('/articles/{slug}', [ArticleController::class, 'update'])->name('articles.update');
    Route::delete('/articles/{slug}', [ArticleController::class, 'destroy'])->name('articles.destroy');

    Route::post('/events', [EventController::class, 'store'])->name('events.store');
    Route::get('/events/table', [EventController::class, 'table'])->name('events.table');
    Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
    Route::get('/events/{id}/edit', [EventController::class, 'edit'])->name('events.edit');
    Route::put('/events/{id}', [EventController::class, 'update'])->name('events.update');
    Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');

    Route::post('/galleries', [GalleryController::class, 'store'])->name('galleries.store');
    Route::get('/galleries/table', [GalleryController::class, 'table'])->name('galleries.table');
    Route::get('/galleries/create', [GalleryController::class, 'create'])->name('galleries.create');
    Route::get('/galleries/{id}/edit', [GalleryController::class, 'edit'])->name('galleries.edit');
    Route::put('/galleries/{id}', [GalleryController::class, 'update'])->name('galleries.update');
    Route::delete('/galleries/{id}', [GalleryController::class, 'destroy'])->name('galleries.destroy');

    Route::get('/clients/table', [ClientController::class, 'table'])->name('clients.table');
    Route::get('/clients/{id}/edit', [ClientController::class, 'edit'])->name('clients.edit');
    Route::put('/clients/{id}/draft', [ClientController::class, 'draft'])->name('clients.draft');
    Route::put('/clients/{id}/publish', [ClientController::class, 'publish'])->name('clients.publish');
    Route::put('/clients/{id}', [ClientController::class, 'update'])->name('clients.update');
    Route::delete('/clients/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');

    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::put('/orders/{id}', [OrderController::class, 'update'])->name('orders.update');
    Route::delete('/orders/{id}', [OrderController::class, 'destroy'])->name('orders.destroy');

    Route::get('/messages', [MessageController::class, 'index'])->name('messages.index');
    Route::put('/messages/{id}/read', [MessageController::class, 'read'])->name('messages.read');
    Route::get('/messages/{id}/reply', [MessageController::class, 'reply'])->name('messages.reply');
    Route::post('/messages/{id}/send', [MessageController::class, 'send'])->name('messages.send');
    Route::delete('/messages/{id}', [MessageController::class, 'destroy'])->name('messages.destroy');
});


Route::get('/home', fn() => Inertia::render('Home/Home'))->name('home');
Route::get('/about', fn() => Inertia::render('AboutUs/AboutUs'))->name('about-us');
Route::get('/company-profile', fn() => Inertia::render('CompanyProfile/CompanyProfile'))->name('company-profile');
Route::get('/contact', fn() => Inertia::render('Contact/Contact'))->name('contact');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{code}', [ProductController::class, 'show'])->name('products.show');

Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{slug}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('/events', [EventController::class, 'index'])->name('events.index');

Route::get('/galleries', [GalleryController::class, 'index'])->name('galleries.index');

Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');
Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');

Route::get('/orders/{code}/create', [OrderController::class, 'create'])->name('orders.create');
Route::get('/orders/{number}/invoice', [OrderController::class, 'invoice'])->name('orders.invoice');
Route::get('/orders/{number}/download', [OrderController::class, 'download'])->name('orders.download');
Route::post('/orders/{code}', [OrderController::class, 'store'])->name('orders.store');

Route::post('/messages', [MessageController::class, 'store'])->name('messages.store');

require __DIR__ . '/auth.php';
