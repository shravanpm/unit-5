const app = `
    <nav class="navbar navbar-expand-lg 
                navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
        <a class="navbar-brand" href="#" style="display: flex; align-items: center;  gap: 10px;">
           

        </a>
    </nav>

    <div class="container my-3 shadow p-3 mb-5 bg-white rounded" >
        <h1>Take your Notes here</h1>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">
                    Add a Note

                </h5>
                <div class="form-group">
                    <textarea class="form-control" id="addTxt" rows="3">
                    </textarea>
                </div>
                <button class="btn btn-primary" id="addBtn" style="background-color:green">
                    Add Note
                </button>
            </div>
        </div>
        <hr>
        <h1>Your Notes</h1>
        <hr>

        <div id="notes" class="row container-fluid">
        </div>
    </div>
   `;

   export default app;
