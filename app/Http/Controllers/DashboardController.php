<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Message;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalOrders = Order::count();
        $ordersPending = Order::where('status', 'pending')->count();
        $ordersProgress = Order::where('status', 'progress')->count();
        $ordersCompleted = Order::where('status', 'completed')->count();
        $totalPrice = Order::where('status', 'completed')->sum('total_estimate');
        $totalProducts = Product::count();
        $totalArticles = Article::count();
        $unreadMessages = Message::where('read_at', null)->count();

        return Inertia::render('Dashboard', [
            'stats' => [
                'totalOrders' => $totalOrders,
                'ordersPending' => $ordersPending,
                'ordersProgress' => $ordersProgress,
                'ordersCompleted' => $ordersCompleted,
                'totalPrice' => $totalPrice,
                'totalProducts' => $totalProducts,
                'totalArticles' => $totalArticles,
                'unreadMessages' => $unreadMessages,
            ],
        ]);
    }
}
