export const fragmentShader = `
	precision mediump float;

	uniform sampler2D tMap;
	uniform vec2 uImageSizes;
	uniform vec2 uPlaneSizes;
	
	varying vec2 vUv;
	varying float vWave;
	
	void main() {
		vec2 ratio = vec2(
			min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
			min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
		);
	
		vec2 uv = vec2(
			vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
			vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
		);

		float wave = vWave * 0.25;
	
		// float r = texture2D(tMap, uv + wave).r;
  	// float g = texture2D(tMap, uv + wave).g;
  	// float b = texture2D(tMap, uv + wave).b;
	
		vec3 texture = texture2D(tMap, uv + wave).rgb;
		gl_FragColor = vec4(texture, 1.0);
	}
	`;

export default fragmentShader;
