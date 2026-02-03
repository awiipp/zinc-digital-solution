<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'image',
        'status',
        'excerpt',
        'introduction',
        'body',
        'conclusion',
        'published_at',
    ];
}
