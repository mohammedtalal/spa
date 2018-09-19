<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'auth'], function () {
	Route::post('register', 'Api\AuthController@register');
	Route::post('login', 'Api\AuthController@login');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('profile', 'Api\AuthController@profile');
        Route::get('logout', 'Api\AuthController@logout');
    });
});

