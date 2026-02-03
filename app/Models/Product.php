<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'product_code',
        'name',
        'status',
        'image',
        'description',
        'price',
    ];

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
}
