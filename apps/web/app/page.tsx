import { Button } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import styles from "./page.module.css";
import { Headline } from "@repo/ui/headline";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>hi</h1>
        <Button label="test"></Button>
        <Checkbox label="test"></Checkbox>
        <Headline tag="h1">Project1</Headline>
      </main>
    </div>
  );
}
