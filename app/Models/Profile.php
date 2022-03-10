<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function profileImage() {
        $imagePath = $this -> image;
        return '/storage/' . $imagePath;
    }
}
