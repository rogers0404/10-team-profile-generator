


module.exports = templateHTML => {
    // destructure page data by section
    const { projects, about, ...header } = templateHTML;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <!-- <link rel="stylesheet" href="style.css"> -->
    </head>
  
    <body>
      <header>
        <div class="container bg-warning p-1 m-0 mw-100">
          <h1 class="text-right text-danger w-100 py-1 ">Manager's Team</h1>
        </div>
      </header>
      <main class="container my-5">
       <!--  ${generateAbout(about)}
        ${generateProjects(projects)} -->
      </main>
      
      <footer>
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