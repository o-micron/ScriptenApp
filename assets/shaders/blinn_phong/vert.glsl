layout(location = 0) in vec3 vertex_position;
layout(location = 1) in vec3 vertex_normal;
layout(location = 2) in vec2 vertex_texcoord;
uniform mat4 model_matrix;
uniform mat4 view_matrix;
uniform mat4 projection_matrix;
uniform vec3 base_color;
void main() {
	vec4 world_position = model_matrix * vec4(vertex_position, 1.0);
  	gl_Position = projection_matrix * view_matrix * world_position;
}