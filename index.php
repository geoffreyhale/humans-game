<!doctype html>
<html lang="en">
<head>
    <title>Humans Game</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
          integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <h1>Humans Game</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    <div class="quickstart-user-details-container">
                        <div>User Status: <span id="quickstart-sign-in-status">Unknown</span></div>
                        <div class="private">Firebase auth <code>currentUser</code> object value:</div>
                        <pre class="private"><code id="quickstart-account-details">null</code></pre>
                    </div>
                </div>
            </div>

            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"
                           placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-secondary" id="quickstart-sign-in" name="signin">Sign In</button>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" id="quickstart-sign-up" name="signup" style="display:none">Sign Up</button>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success" disabled id="quickstart-verify-email" name="verify-email" style="visibility:hidden">Send
                        Email Verification
                    </button>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-danger" id="quickstart-password-reset" name="verify-email" style="visibility:hidden">Send
                        Password Reset Email
                    </button>
                </div>
            </form>
        </div>
        <div class="col-sm-8">
            <div id="app"></div>
        </div>
    </div>
</div>

<!-- Humans Game (with public API (asap)) -->
<script src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js"></script>
<script src="app/config/firebase.js"></script>
<script src="firebase/init.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.1/firebase-auth.js"></script>
<script src="firebase/email.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js"></script>
<script src="public/app.js"></script>

<!-- Humans Game UI ("the official" (not necessarily the best)) -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
        integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
        integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>
</body>
</html>