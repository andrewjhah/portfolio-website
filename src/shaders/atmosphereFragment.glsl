varying vec3 vertexNormal;
void main(){
    float dotProduct=dot(vertexNormal,vec3(0,0,1));
    float intensity=pow(.8-dotProduct,2.);
    gl_FragColor=vec4(.3,.6,1,1)*intensity;
}