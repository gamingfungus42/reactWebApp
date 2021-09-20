import React from "react";

const Product = () => {
    return (
        <form className="mt-16 max-w-sm  rounded-xl p-10 relative flex flex-col overflow-hidden border-blue-300 border-2">
            <h1>Register</h1><br />

            <span class="input"></span>
            <input type="text" name="name" placeholder="Full name" title="Format: First Name [space] Last Name" autofocus autocomplete="off" required pattern="^\w+\s\w+$" />
            <span class="input"></span>
            <input type="email" name="email" placeholder="Email address" required />
            <span id="passwordMeter"></span>
            <input type="password" name="password" id="password" placeholder="Password" title="Password min 8 characters. At least one UPPERCASE and one lowercase letter" required pattern="(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" />

            <button type="submit" value="Sign Up" title="Submit form" class="icon-arrow-right"><span>Sign up</span></button>
        </form>

    );
};

export default Product