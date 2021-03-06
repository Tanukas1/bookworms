import React from 'react'
import "../stylesheets/manageUser.css"
export default function manageuser() {
  return (
    <div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>User <b>Management</b></h2>
                    </div>
                    <div class="col-sm-7">
                        <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
                        <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>						
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>						
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="#"><img src="" /> Michael Holz</a></td>
                        <td>04/10/2013</td>                        
                        <td>Admin</td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                            <a href="#" class="edit" title="edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="#"><img src=""/> Paula Wilson</a></td>
                        <td>05/08/2014</td>                       
                        <td>Publisher</td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                            <a href="#" class="edit" title="edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="#"><img src=""/> Antonio Moreno</a></td>
                        <td>11/05/2015</td>
                        <td>Publisher</td>
                        <td><span class="status text-danger">&bull;</span> Suspended</td>                        
                        <td>
                            <a href="#" class="edit" title="edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>                        
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="#"><img src="" /> Mary Saveley</a></td>
                        <td>06/09/2016</td>
                        <td>Reviewer</td>
                        <td><span class="status text-success">&bull;</span> Active</td>
                        <td>
                            <a href="#" class="edit" title="edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="#"><img src=""/> Martin Sommer</a></td>
                        <td>12/08/2017</td>                        
                        <td>Moderator</td>
                        <td><span class="status text-warning">&bull;</span> Inactive</td>
                        <td>
                            <a href="#" class="edit" title="edit" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#">Previous</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item active"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>     
  )
}
