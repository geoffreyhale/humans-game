<html>
  <head>
    <title>Humans Game</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  <head>
  <body>
    <h1>Humans Game</h1>

    <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-primary" id="quickstart-sign-in" name="signin">Sign In</button>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-default" id="quickstart-sign-up" name="signup">Sign Up</button>
        </div>
        <button type="button" class="btn btn-success" disabled id="quickstart-verify-email" name="verify-email">Send Email Verification</button>
        <button type="button" class="btn btn-danger" id="quickstart-password-reset" name="verify-email">Send Password Reset Email</button>
    </form>

    <!-- Container where we'll display the user details -->
    <div class="quickstart-user-details-container">
        Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
        <div>Firebase auth <code>currentUser</code> object value:</div>
        <pre><code id="quickstart-account-details">null</code></pre>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

    <script src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js"></script>
    <script src="app/config/firebase.js"></script>
    <script src="firebase/init.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.6.1/firebase-auth.js"></script>
    <script src="firebase/email.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js"></script>
    <script src="public/app.js"></script>
  </body>
</html>
