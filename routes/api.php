<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/islogged', function () {
  return true;
});

route::apiResource('users', UserController::class);
route::apiResource('roles', RoleController::class);

route::post('/login', [LoginController::class, 'login']);
route::post('/logout', [LoginController::class, 'logout']);