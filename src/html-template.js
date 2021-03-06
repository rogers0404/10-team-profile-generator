
const addTeam = team => {
    return `           
                    ${team.map(employee => {
                        if(employee.getRole()==='Engineer')
                            return `
                            <div class="col mb-4" >
                                <div class="card" >      
                                    <div class="card-body bg-warning">
                                        <h5 class="card-title text-danger">${employee.getName()}</h5>
                                        <p class="card-text text-sm text-danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                            ${employee.getRole()}
                                        </p>
                                    </div>                        
                                    <ul class="list-group list-group-flush text text-light">
                                        <li class="list-group-item bg-secondary">ID: ${employee.getId()}</li>
                                        <li class="list-group-item bg-secondary">Email: <a class="text-decoration-none" href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                                        <li class="list-group-item bg-secondary">GitHub User: <a class="text-decoration-none" href="https://github.com/${employee.getGithub()}/" target="_blank">${employee.getGithub()}</a></li>
                                    </ul>
                                </div>
                            </div>
                `;
    }).join('')}
                ${team.map(employee => {
                    if(employee.getRole()==='Intern')
                        return `
                            <div class="col mb-4" >
                                <div class="card" >   
                                    <div class="card-body bg-warning">
                                        <h5 class="card-title text-danger">${employee.getName()}</h5>
                                        <p class="card-text text-sm text-danger">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                            ${employee.getRole()}
                                        </p>
                                    </div>                        
                                    <ul class="list-group list-group-flush text text-light">
                                        <li class="list-group-item bg-secondary">ID: ${employee.getId()}</li>
                                        <li class="list-group-item bg-secondary">Email: <a class="text-decoration-none" href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                                        <li class="list-group-item bg-secondary">School: ${employee.getSchool()}</li>
                                    </ul>
                                </div>
                            </div>
                    `;
                }).join('')}
                `;
}

module.exports = (manager, team) => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container bg-warning p-1 m-0 mw-100">
          <h1 class="text-right text-danger w-100 py-1 ">Manager's Team</h1>
        </div>
      </header>
      <main class="container my-5">
      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 justify-content-center">
            <div class="col mb-4" >
                <div class="card" >
                    <div class="card-body bg-warning">
                        <h5 class="card-title text-danger">${manager.getName()}</h5>
                        <p class="card-text text-sm text-danger">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755S12 12 8 12s-5 1.755-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                            </svg>
                            ${manager.getRole()}
                        </p>
                    </div>                        
                    <ul class="list-group list-group-flush text text-light">
                        <li class="list-group-item bg-secondary">ID: ${manager.getId()}</li>
                        <li class="list-group-item bg-secondary">Email: <a class="text-decoration-none" href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item bg-secondary">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                    </div>
            </div>
            <!-- I must add the next cards for employees -->
            ${addTeam(team)}
        </div>

      </main>
      <!-- Space left in blank--> 
      
      <footer class="footer">
        <div class="container bg-warning p-1 m-0 mw-100">
            <h5 class="text-left text-danger w-100 ">
                &copy; 2020 by 
                <span>
                    <a class="text-decoration-none" href="https://github.com/rogers0404/" target="_blank"> GitHub: Rogers0404</a>
                </span>
            </h5>
        </div>
      </footer>
    </body>
    </html>
    `;
  };