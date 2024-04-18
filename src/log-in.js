function Ln() {
return(
    <div class="container" align ="center">
        <h1> Login </h1>
        <br/>
        <form action="log-in.php" method="POST">
            <input
            type="text"
            name="Email"
            class="form-control"
            placeholder="Enter your Email"
            />
            <br/>
            <input
            type="password"
            name="Password"
            class="form-control"
            placeholder="Enter Password"
            />
            <br/>
            <input
            type="submit"
            value="Login"
            class="btn btn-primary"
            />
        </form>
    </div>
)
}

export default Ln