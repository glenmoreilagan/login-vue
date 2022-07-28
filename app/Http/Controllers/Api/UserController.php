<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {

    // eloquent
    return User::with('role')->get();
    
    // query builder
    // $users = DB::table('users')
    // ->select('users.id', 'users.name', 'users.email')
    // ->addSelect(DB::raw("ifnull(roles.role_name, 'No-Role') as role_name"))
    // ->leftJoin('roles', 'roles.id', '=', 'users.role_id')
    // ->get();

    // return $users;

    // return User::all();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|string|unique:users,name',
      'email' => 'required|string|email|unique:users,email',
      'role_id' => 'integer',
      'password' => 'required|string|confirmed|min:8:'
    ]);

    $user = new User();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->role_id = $request->role_id;
    $user->password = bcrypt($request->password);
    $user->save();

    return $user;
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    return User::find($id);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $request->validate([
      'name' => 'required|string|unique:users,name,'.$id,
      'email' => 'required|string|email|unique:users,email,'.$id,
      'role_id' => 'integer',
      'password' => 'required|string|confirmed|min:8:'
    ]);
    
    $user = User::find($id);
    $user->name = $request->name;
    $user->email = $request->email;
    $user->role_id = $request->role_id;
    $user->password = bcrypt($request->password);
    $user->save();
    
    return $user;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    return User::destroy($id);
  }
}
