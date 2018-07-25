class TasksController < ApplicationController
	def create 
		@new_task = Task.create(name: params["task"]["name"], done: params["task"]["done"], task_list_id: params["task"]["task_list_id"])
		render json: @new_task
	end

	def destroy 
		@task = Task.find(params["id"]).delete
	end
end
