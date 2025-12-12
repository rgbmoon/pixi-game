in vec2 vTextureCoord;
in vec2 vFilterCoord;

uniform float uTime;
uniform vec2 uResolution;

out vec4 finalColor;

void main(){
    vec2 uv = (vFilterCoord - 0.5) * 2.0;

    float t = uTime * 0.8;

    // расстояние до центра с волнами
    float r = length(uv);
    float deform = sin(uv.x * 4.0 + t) * 0.1 + sin(uv.y * 3.0 - t * 1.2) * 0.1;

    float mask = smoothstep(0.4 + deform, 0.39 + deform, r);

    vec3 color = vec3(0.9, 0.7, 0.2) * mask;

    finalColor = vec4(color, mask);
}
