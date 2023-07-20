<?php

namespace App\Http\Controllers;
use App\Models\task;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return task::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->all();
        error_log($request);
        $newTask = new task;
        $newTask["description"] = $request["description"];
        $newTask["done"] = $request["done"];
        $newTask->save();
        return $newTask;
    }

    /**
     * Mark as finished the specified resource in storage.
     */
    public function markAsDone(string $id)
    {
        $taskFinished = task::find($id);
        if($taskFinished) {
            $taskFinished['done'] = !$taskFinished['done'];
            $taskFinished->save();
        }
        return $taskFinished;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $taskToUpdate = task::find($id);
        if($taskToUpdate) {
            $taskToUpdate['description'] = $request['description'];
            $taskToUpdate->save();
        }
        return $taskToUpdate;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function markAsDeleted(string $id)
    {
        $taskToDelete = task::find($id);
        if($taskToDelete) {
            $taskToDelete['deleted_at'] = Carbon::now();
            $taskToDelete->save();
        }
        return $taskToDelete;
    }
}
