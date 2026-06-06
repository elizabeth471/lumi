/** Wraps a route's content in the mockup's `.view` container.
 *  Renders in the active state immediately so there is no
 *  display:none→flex / opacity 0→1 flash on mount or navigation. */
export default function View({ children }: { children: React.ReactNode }) {
  return <div className="view active">{children}</div>;
}
