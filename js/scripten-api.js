function ScriptenModule() {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // C FUNCTIONS //
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    this.get_delta_time = Module.get_delta_time;
    this.set_window_clear_color = Module.set_window_clear_color;

    this.get_meshes = Module.get_meshes
    this.get_shaders = Module.get_shaders
    this.get_textures = Module.get_textures
    this.get_materials = Module.get_materials
    this.get_entities = Module.get_entities

    this.get_mesh_buffers = Module.get_mesh_buffers
    this.get_shader_buffers = Module.get_shader_buffers
    this.get_texture_buffers = Module.get_texture_buffers

    this.get_material_shader = Module.get_material_shader
    this.get_material_texture = Module.get_material_texture

    this.get_entity_mesh = Module.get_entity_mesh
    this.get_entity_material = Module.get_entity_material
    this.get_entity_position = Module.get_entity_position
    this.get_entity_rotation = Module.get_entity_rotation
    this.get_entity_scale = Module.get_entity_scale

    this.get_entity_by_name = Module.get_entity_by_name
    this.get_material_by_name = Module.get_material_by_name

    this.create_or_get_mesh = Module.create_or_get_mesh
    this.create_or_get_shader = Module.create_or_get_shader
    this.create_or_get_texture = Module.create_or_get_texture
    this.create_material = Module.create_material
    this.create_entity = Module.create_entity

    this.set_material_shader = Module.set_material_shader
    this.set_material_texture = Module.set_material_texture

    this.set_entity_mesh = Module.set_entity_mesh
    this.set_entity_material = Module.set_entity_material
    this.set_entity_position = Module.set_entity_position
    this.set_entity_rotation = Module.set_entity_rotation
    this.set_entity_scale = Module.set_entity_scale

    this.get_pbr_shader_sources = Module.get_pbr_shader_sources
    this.set_pbr_shader_sources = Module.set_pbr_shader_sources

    this.get_post_shader_sources = Module.get_post_shader_sources
    this.set_post_shader_sources = Module.set_post_shader_sources

    this.resize_browser_window = Module.cwrap('c_resize_browser_window', '', ['number', 'number']);
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // DATA //
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    this.mesh_buffers = this.get_mesh_buffers();
    this.shader_buffers = this.get_shader_buffers();
    this.texture_buffers = this.get_texture_buffers();

    this.mesh_buffer_cube = this.mesh_buffers.get(0);
    this.mesh_buffer_ico = this.mesh_buffers.get(1);
    this.mesh_buffer_plane = this.mesh_buffers.get(2);
    this.mesh_buffer_sphere = this.mesh_buffers.get(3);
    this.mesh_buffer_torus = this.mesh_buffers.get(4);

    this.mesh_cube = this.create_or_get_mesh(this.mesh_buffer_cube);
    this.mesh_ico = this.create_or_get_mesh(this.mesh_buffer_ico);
    this.mesh_plane = this.create_or_get_mesh(this.mesh_buffer_plane);
    this.mesh_sphere = this.create_or_get_mesh(this.mesh_buffer_sphere);
    this.mesh_torus = this.create_or_get_mesh(this.mesh_buffer_torus);

    this.shader_color = this.create_or_get_shader(this.shader_buffers.get(0));
    this.texture_grid = this.create_or_get_shader(this.texture_buffers.get(0));
    this.material_basic = this.create_material(this.shader_color, this.texture_grid);
    ///////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // JS STYLE FUNCTIONS RETURN
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    this.get_delta_time_js = function () {
        return this.get_delta_time();
    }
    this.get_meshes_js = function () {
        var arr = [];
        var meshes = this.get_meshes();
        for (var i = 0; i < meshes.size(); i++) {
            arr.push(meshes.get(i));
        }
        return arr;
    };
    this.get_shaders_js = function () {
        var arr = [];
        var shaders = this.get_shaders();
        for (var i = 0; i < shaders.size(); i++) {
            arr.push(shaders.get(i));
        }
        return arr;
    };
    this.get_textures_js = function () {
        var arr = [];
        var textures = this.get_textures();
        for (var i = 0; i < textures.size(); i++) {
            arr.push(textures.get(i));
        }
        return arr;
    };
    this.get_materials_js = function () {
        var arr = [];
        var materials = this.get_materials();
        for (var i = 0; i < materials.size(); i++) {
            arr.push(materials.get(i));
        }
        return arr;
    };
    this.get_entities_js = function () {
        var arr = [];
        var entities = this.get_entities();
        for (var i = 0; i < entities.size(); i++) {
            arr.push(entities.get(i));
        }
        return arr;
    };
    this.get_mesh_buffers_js = function () {
        var arr = [];
        var mesh_buffers = this.get_mesh_buffers();
        for (var i = 0; i < mesh_buffers.size(); i++) {
            arr.push(mesh_buffers.get(i));
        }
        return arr;
    };
    this.get_shader_buffers_js = function () {
        var arr = [];
        var shader_buffers = this.get_shader_buffers();
        for (var i = 0; i < shader_buffers.size(); i++) {
            arr.push(shader_buffers.get(i));
        }
        return arr;
    };
    this.get_texture_buffers_js = function () {
        var arr = [];
        var texture_buffers = this.get_texture_buffers();
        for (var i = 0; i < texture_buffers.size(); i++) {
            arr.push(texture_buffers.get(i));
        }
        return arr;
    };
    this.get_material_shader_js = function (material_id) {
        return this.get_material_shader(material_id);
    }
    this.get_material_texture_js = function (texture_id) {
        return this.get_material_texture(texture_id);
    }
    this.get_entity_mesh_js = function (entity_id) {
        return this.get_entity_mesh(entity_id);
    }
    this.get_entity_material_js = function (entity_id) {
        return this.get_entity_material(entity_id);
    }
    this.get_entity_position_js = function (entity_id) {
        var arr = [];
        var position = this.get_entity_position(entity_id);
        for (var i = 0; i < position.size(); i++) {
            arr.push(position.get(i));
        }
        return arr;
    }
    this.get_entity_rotation_js = function (entity_id) {
        var arr = [];
        var rotation = this.get_entity_rotation(entity_id);
        for (var i = 0; i < rotation.size(); i++) {
            arr.push(rotation.get(i));
        }
        return arr;
    }
    this.get_entity_scale_js = function (entity_id) {
        var arr = [];
        var scale = this.get_entity_scale(entity_id);
        for (var i = 0; i < scale.size(); i++) {
            arr.push(scale.get(i));
        }
        return arr;
    }
    this.get_entity_by_name_js = function (name) {
        return this.get_entity_by_name(name);
    }
    this.get_material_by_name_js = function (name) {
        return this.get_material_by_name(name);
    }
    this.create_or_get_mesh_js = function (mesh_buffer_id) {
        return this.create_or_get_mesh(mesh_buffer_id);
    }
    this.create_or_get_shader_js = function (shader_buffer_id) {
        return this.create_or_get_shader(shader_buffer_id);
    }
    this.create_or_get_texture_js = function (texture_buffer_id) {
        return this.create_or_get_texture(texture_buffer_id);
    }
    this.create_material_js = function (shader_id, texture_id) {
        return this.create_material(shader_id, texture_id);
    }
    this.create_entity_js = function (mesh_id, material_id) {
        return this.create_entity(mesh_id, material_id);
    }
    this.set_material_shader_js = function (material_id, shader_id) {
        this.set_material_shader(material_id, shader_id);
    }
    this.set_material_texture_js = function (material_id, texture_id) {
        this.set_material_texture(material_id, texture_id);
    }
    this.set_entity_mesh_js = function (entity_id, mesh_id) {
        this.set_entity_mesh(entity_id, mesh_id);
    }
    this.set_entity_material_js = function (entity_id, material_id) {
        this.set_entity_material;
    }
    this.set_entity_position_js = function (entity_id, x, y, z) {
        this.set_entity_position(entity_id, x, y, z);
    }
    this.set_entity_rotation_js = function (entity_id, x, y, z) {
        this.set_entity_rotation(entity_id, x, y, z);
    }
    this.set_entity_scale_js = function (entity_id, x, y, z) {
        this.set_entity_scale(entity_id, x, y, z);
    }
    this.get_pbr_shader_sources_js = function() {
        var arr = [];
        var result = this.get_pbr_shader_sources();
        for (var i = 0; i < result.size(); i++) {
            arr.push(result.get(i));
        }
        return arr;
    }
    this.set_pbr_shader_sources_js = function(shaderSources) {
        this.set_pbr_shader_sources(shaderSources);
    }
    this.get_post_shader_sources_js = function() {
        var arr = [];
        var result = this.get_post_shader_sources();
        for (var i = 0; i < result.size(); i++) {
            arr.push(result.get(i));
        }
        return arr;
    }
    this.set_post_shader_sources_js = function(shaderSources) {
        this.set_post_shader_sources(shaderSources);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
}

var scriptenModule = null;

function scriptenCApi() {
    scriptenModule = new ScriptenModule();
    // keep resize events flowing from window to c ..
    function reportWindowSize() {
        var theCanvas = document.getElementById('canvas');
        scriptenModule.resize_browser_window(theCanvas.offsetWidth, theCanvas.offsetHeight);
        document.getElementById("editor").setAttribute("style","height:700px");
    }
    window.onresize += reportWindowSize;
    reportWindowSize();
}