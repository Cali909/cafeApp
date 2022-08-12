import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>React Cafe</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Cafes</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Cafe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
