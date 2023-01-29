export default function getFragmentShader(tMap) {
  return `
	precision mediump float;

	uniform sampler2D ${tMap};
	uniform float uAspect;
	
	varying vec2 vUv;
	varying float vWave;
	
	void main() {
		vec2 uv = vUv;

		// if (uAspect > 1.0) {
		// 	uv.y = (uv.y - 0.5) * uAspect + 0.5;
		// } else {
		// 	uv.x = (uv.x - 0.5) * (1.0 / uAspect) + 0.5;
		// }

		float wave = vWave * 0.25;
	
		// float r = texture2D(${tMap}, vUv + wave).r;
		// float g = texture2D(${tMap}, vUv + wave).g;
		// float b = texture2D(${tMap}, vUv + wave).b;
	
		vec3 texture = texture2D(${tMap}, uv + wave).rgb;
		gl_FragColor = vec4(texture, 1.0);
	}
	`;
}
