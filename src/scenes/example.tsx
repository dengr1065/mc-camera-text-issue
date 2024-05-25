import { Camera, Txt, makeScene2D } from "@motion-canvas/2d";
import { createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const camera = createRef<Camera>();
  const text = createRef<Txt>();

  view.add(
    <Camera ref={camera} zoom={5}>
      <Txt ref={text} text="Example Text" opacity={0} />
    </Camera>
  );

  // From https://github.com/motion-canvas/motion-canvas/issues/1057#issuecomment-2126540039
  camera().scene().position(view.size().div(2));

  yield* text().opacity(1, 2).wait(2).to(0, 2);
});
