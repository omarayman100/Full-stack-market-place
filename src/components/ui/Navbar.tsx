import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import NavItems from "../NavItems";
import { buttonVariants } from "./button";
import Cart from "../Cart";

const Navbar = () => {
  var Signup
  const user = Signup;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header>
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobille navbar */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center ">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="Sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}
                  {user ? null : (
                    <Link href="Sign-Up" className={buttonVariants()}>
                      Create Account
                    </Link>
                
                
                
                )}


              <div className="ml-4 flow-root lg:ml-6">
<Cart />
              </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
