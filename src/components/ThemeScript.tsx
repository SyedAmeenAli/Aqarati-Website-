/** Runs before paint: marks JS availability so reveal states only apply when scripts run. */
const code = `document.documentElement.classList.add('js');`;
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
