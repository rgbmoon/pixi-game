in vec2 vTextureCoord;
in vec2 vFilterCoord;

uniform float uTime;
uniform vec2 uResolution;

out vec4 finalColor;

float rand(vec2 uv){
    return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 uv = vFilterCoord;

    // Плавающий градиент
    float t = uTime * 0.2;
    vec3 colorA = vec3(0.1, 0.2, 0.6);
    vec3 colorB = vec3(0.9, 0.4, 0.6);

    float mixV = 0.5 + 0.5 * sin(uv.y * 3.0 + t);
    vec3 color = mix(colorA, colorB, mixV);

    // зерно
    float grain = rand(uv * uTime) * 0.06;
    color += grain;

    finalColor = vec4(color, 1.0);
}
