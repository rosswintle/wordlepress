    const funcs = [
        'wp_ajax_nopriv_heartbeat',
        'wp_ajax_fetch_list',
        'wp_ajax_imgedit_preview',
        'wp_ajax_oembed_cache',
        'wp_ajax_autocomplete_user',
        'wp_ajax_dashboard_widgets',
        'wp_ajax_logged_in',
        'wp_ajax_delete_comment',
        'wp_ajax_delete_tag',
        'wp_ajax_delete_link',
        'wp_ajax_delete_meta',
        'wp_ajax_delete_post',
        'wp_ajax_trash_post',
        'wp_ajax_untrash_post',
        'wp_ajax_delete_page',
        'wp_ajax_dim_comment',
        'wp_ajax_add_tag',
        'wp_ajax_get_tagcloud',
        'wp_ajax_get_comments',
        'wp_ajax_replyto_comment',
        'wp_ajax_edit_comment',
        'wp_ajax_add_meta',
        'wp_ajax_add_user',
        'wp_ajax_closed_postboxes',
        'wp_ajax_hidden_columns',
        'wp_ajax_get_permalink',
        'wp_ajax_sample_permalink',
        'wp_ajax_inline_save',
        'wp_ajax_find_posts',
        'wp_ajax_widgets_order',
        'wp_ajax_save_widget',
        'wp_ajax_update_widget',
        'wp_ajax_upload_attachment',
        'wp_ajax_image_editor',
        'wp_ajax_date_format',
        'wp_ajax_time_format',
        'wp_ajax_get_attachment',
        'wp_ajax_query_attachments',
        'wp_ajax_save_attachment',
        'wp_ajax_query_themes',
        'wp_ajax_parse_embed',
        'wp_ajax_destroy_sessions',
        'wp_ajax_crop_image',
        'wp_ajax_generate_password',
        'wp_ajax_install_theme',
        'wp_ajax_update_theme',
        'wp_ajax_delete_theme',
        'wp_ajax_install_plugin',
        'wp_ajax_update_plugin',
        'wp_ajax_delete_plugin',
        'wp_ajax_search_plugins',
        'wp_ajax_rest_nonce',
        'wp_get_link_cats',
        'get_link_to_edit',
        'wp_set_link_cats',
        'get_comment_to_edit',
        'get_pending_comments_num',
        'enqueue_comment_hotkeys_js',
        'wp_credits_section_title',
        'wp_credits_section_list',
        'wp_add_dashboard_widget',
        'wp_dashboard_right_now',
        'wp_dashboard_quick_press',
        'wp_dashboard_recent_drafts',
        'wp_dashboard_site_activity',
        'wp_dashboard_recent_posts',
        'wp_dashboard_recent_comments',
        'wp_dashboard_rss_output',
        'wp_dashboard_rss_control',
        'wp_dashboard_events_news',
        'wp_dashboard_primary_output',
        'wp_dashboard_browser_nag',
        'dashboard_browser_nag_class',
        'wp_check_browser_version',
        'wp_dashboard_php_nag',
        'dashboard_php_nag_class',
        'wp_dashboard_site_health',
        'add_option_update_handler',
        'remove_option_update_handler',
        'get_author_user_ids',
        'get_editable_user_ids',
        'get_nonauthor_user_ids',
        'get_others_unpublished_posts',
        'wp_print_editor_js',
        'type_url_form_image',
        'type_url_form_audio',
        'type_url_form_video',
        'type_url_form_file',
        'get_post_to_edit',
        'wp_dashboard_secondary_output',
        'wp_dashboard_incoming_links',
        'wp_dashboard_primary_control',
        'wp_dashboard_secondary_control',
        'wp_dashboard_plugins_output',
        'post_form_autocomplete_off',
        'options_permalink_add_js',
        'validate_file_to_edit',
        'wp_save_image_file',
        'image_edit_apply_changes',
        'wp_update_image_subsizes',
        'wp_create_image_subsizes',
        'wp_generate_attachment_metadata',
        'wp_read_image_metadata',
        'file_is_valid_image',
        'file_is_displayable_image',
        'load_image_to_edit',
        'wp_import_handle_upload',
        'wp_get_popular_importers',
        'the_media_upload_tabs',
        'media_send_to_editor',
        'get_upload_iframe_src',
        'media_upload_form_handler',
        'wp_media_upload_handler',
        'image_align_input_fields',
        'image_size_input_fields',
        'image_link_input_fields',
        'wp_caption_input_textarea',
        'get_compat_media_markup',
        'media_upload_type_form',
        'media_upload_gallery_form',
        'media_upload_library_form',
        'media_upload_flash_bypass',
        'media_upload_html_bypass',
        'media_upload_text_after',
        'multisite_over_quota_message',
        'edit_form_image_editor',
        'wp_read_video_metadata',
        'wp_read_audio_metadata',
        'wp_media_attach_action',
        'post_submit_meta_box',
        'attachment_submit_meta_box',
        'post_format_meta_box',
        'post_tags_meta_box',
        'post_categories_meta_box',
        'post_excerpt_meta_box',
        'post_trackback_meta_box',
        'post_custom_meta_box',
        'post_comment_meta_box',
        'post_slug_meta_box',
        'post_author_meta_box',
        'post_revisions_meta_box',
        'page_attributes_meta_box',
        'link_submit_meta_box',
        'link_categories_meta_box',
        'link_target_meta_box',
        'link_xfn_meta_box',
        'link_advanced_meta_box',
        'post_thumbnail_meta_box',
        'save_mod_rewrite_rules',
        'wp_doc_link_parse',
        'iis7_rewrite_rule_exists',
        'iis7_delete_rewrite_rule',
        'iis7_add_rewrite_rule',
        'admin_color_scheme_picker',
        'wp_color_scheme_settings',
        'wp_admin_viewport_meta',
        'wp_check_locked_posts',
        'wp_refresh_post_lock',
        'wp_refresh_post_nonces',
        'wp_refresh_heartbeat_nonces',
        'wp_heartbeat_set_suspension',
        'wp_admin_canonical_url',
        'wp_check_php_version',
        'is_wpmu_sitewide_plugin',
        'get_site_allowed_themes',
        'wpmu_get_blog_allowedthemes',
        'ms_deprecated_blogs_file',
        'fix_import_form_size',
        'sync_category_tag_slugs',
        'check_import_new_users',
        'network_settings_add_js',
        'network_edit_site_nav',
        'wp_nav_menu_setup',
        'options_discussion_add_js',
        'options_general_add_js',
        'options_reading_add_js',
        'options_reading_blog_charset',
        'install_plugins_favorites_form',
        'install_plugin_install_status',
        'is_network_only_plugin',
        'get_admin_page_parent',
        'get_admin_page_title',
        'get_plugin_page_hook',
        'get_plugin_page_hookname',
        'wp_clean_plugins_cache',
        'wp_get_plugin_error',
        'get_available_post_statuses',
        'wp_edit_posts_query',
        'wp_edit_attachments_query',
        'get_sample_permalink_html',
        'wp_check_post_lock',
        'wp_set_post_lock',
        'wp_create_post_autosave',
        'wp_print_revision_templates',
        'wp_get_db_schema',
        'get_hidden_meta_boxes',
        'get_category_to_edit',
        'get_tags_to_edit',
        'get_terms_to_edit',
        'wp_popular_terms_checklist',
        'wp_link_category_checklist',
        'wp_import_upload_form',
        'install_themes_feature_list',
        'install_theme_search_form',
        'get_theme_update_available',
        'get_theme_feature_list',
        'customize_themes_print_templates',
        'wp_get_theme_error',
        'wp_get_available_translations',
        'wp_install_language_form',
        'wp_download_language_pack',
        'find_core_auto_update',
        'update_right_now_message',
        'wp_plugin_update_rows',
        'wp_plugin_update_row',
        'wp_theme_update_rows',
        'wp_theme_update_row',
        'wp_recovery_mode_nag',
        'wp_new_blog_notification',
        'upgrade_230_options_table',
        'upgrade_230_old_tables',
        'upgrade_430_fix_comments',
        'make_db_current_silent',
        'translate_level_to_role',
        'wp_check_mysql_version',
        'maybe_disable_automattic_widgets',
        'maybe_disable_link_manager',
        'get_user_to_edit',
        'default_password_nag_handler',
        'delete_users_add_js',
        'admin_created_user_email',
        'wp_list_widget_controls',
        'next_widget_id_number',
        'wp_load_press_this',
        'setup_config_display_header',
        'core_auto_updates_settings',
        'do_dismiss_core_update',
        'do_undismiss_core_update',
        'wp_admin_bar_render',
        'wp_admin_bar_header',
        'is_admin_bar_showing',
        'get_the_modified_author',
        'get_the_author_meta',
        'get_the_author_link',
        'get_the_author_posts',
        'the_author_posts_link',
        'get_author_posts_url',
        'get_default_block_categories',
        'get_allowed_block_types',
        'get_block_editor_settings',
        'wp_register_alignment_support',
        'wp_apply_alignment_support',
        'wp_register_border_support',
        'wp_apply_border_support',
        'wp_skip_border_serialization',
        'wp_register_colors_support',
        'wp_apply_colors_support',
        'wp_register_dimensions_support',
        'wp_apply_dimensions_support',
        'wp_skip_dimensions_serialization',
        'wp_register_duotone_support',
        'wp_render_duotone_support',
        'wp_render_elements_support',
        'wp_register_layout_support',
        'wp_get_layout_style',
        'wp_register_spacing_support',
        'wp_apply_spacing_support',
        'wp_skip_spacing_serialization',
        'wp_register_typography_support',
        'wp_apply_typography_support',
        'get_block_theme_folders',
        'get_block_file_template',
        'generate_block_asset_handle',
        'register_block_script_handle',
        'register_block_style_handle',
        'get_dynamic_block_names',
        'strip_core_block_namespace',
        'filter_block_kses_value',
        'get_query_pagination_arrow',
        'wp_enqueue_block_style',
        'render_block_core_archives',
        'register_block_core_archives',
        'render_block_core_block',
        'register_block_core_block',
        'render_block_core_calendar',
        'register_block_core_calendar',
        'render_block_core_categories',
        'register_block_core_categories',
        'render_block_core_file',
        'register_block_core_file',
        'register_block_core_gallery',
        'render_block_core_image',
        'register_block_core_image',
        'render_block_core_loginout',
        'register_block_core_loginout',
        'render_block_core_navigation',
        'register_block_core_navigation',
        'register_block_core_pattern',
        'render_block_core_pattern',
        'register_block_core_query',
        'render_block_core_rss',
        'register_block_core_rss',
        'render_block_core_search',
        'register_block_core_search',
        'render_block_core_shortcode',
        'register_block_core_shortcode',
        'note_sidebar_being_rendered',
        'discard_sidebar_being_rendered',
        'wp_cache_get_multiple',
        'strip_fragment_from_url',
        'redirect_guess_404_permalink',
        'wp_redirect_admin_locations',
        'get_the_category_list',
        'default_topic_count_scale',
        'wp_generate_tag_cloud',
        'walk_category_dropdown_tree',
        'get_the_tag_list',
        'get_the_term_list',
        'get_term_parents_list',
        'get_category_by_path',
        'get_category_by_slug',
        'cat_is_ancestor_of',
        'register_block_pattern_category',
        'unregister_block_pattern_category',
        'get_block_wrapper_attributes',
        'get_comment_author_email',
        'comment_author_email_link',
        'get_comment_author_link',
        'get_comment_author_IP',
        'get_comment_author_url',
        'comment_author_url_link',
        'get_comments_number_text',
        'get_comment_reply_link',
        'get_post_reply_link',
        'cancel_comment_reply_link',
        'get_comment_id_fields',
        'get_default_comment_status',
        'wp_set_comment_cookies',
        'check_comment_flood_db',
        'wp_check_comment_flood',
        'get_comment_pages_count',
        'get_page_of_comment',
        'wp_get_comment_status',
        'wp_transition_comment_status',
        'wp_get_current_commenter',
        'wp_throttle_comment_flood',
        'wp_set_comment_status',
        'wp_defer_comment_counting',
        'wp_update_comment_count',
        'discover_pingback_server_uri',
        'pingback_ping_source_uri',
        'wp_handle_comment_submission',
        'wp_schedule_single_event',
        'wp_clear_scheduled_hook',
        'wp_get_scheduled_event',
        'wp_plugin_directory_constants',
        'user_can_create_post',
        'user_can_create_draft',
        'user_can_edit_post',
        'user_can_delete_post',
        'user_can_edit_user',
        'wp_get_post_cats',
        'wp_set_post_cats',
        'get_category_rss_link',
        'get_author_rss_link',
        'get_all_category_ids',
        'get_the_author_description',
        'get_the_author_login',
        'get_the_author_firstname',
        'get_the_author_lastname',
        'get_the_author_nickname',
        'get_the_author_email',
        'get_the_author_icq',
        'get_the_author_yim',
        'get_the_author_msn',
        'get_the_author_aim',
        'get_the_author_url',
        'get_the_author_ID',
        'get_the_attachment_link',
        'get_attachment_icon_src',
        'get_users_of_blog',
        'start_post_rel_link',
        'get_index_rel_link',
        'parent_post_rel_link',
        'add_custom_image_header',
        'remove_custom_image_header',
        'wp_get_single_post',
        'gd_edit_image_support',
        'default_topic_count_text',
        'preview_theme_ob_filter',
        'get_comments_popup_template',
        'wp_embed_handler_googlevideo',
        'wp_kses_js_entities',
        'wp_slash_strings_only',
        'wp_sensitive_page_meta',
        'wp_embed_register_handler',
        'wp_embed_unregister_handler',
        'wp_oembed_add_provider',
        'wp_oembed_remove_provider',
        'wp_maybe_load_embeds',
        'wp_embed_handler_youtube',
        'wp_embed_handler_audio',
        'wp_embed_handler_video',
        'wp_oembed_register_route',
        'get_post_embed_url',
        'get_oembed_endpoint_url',
        'get_post_embed_html',
        'get_oembed_response_data',
        'wp_oembed_ensure_format',
        'wp_filter_oembed_result',
        'wp_embed_excerpt_more',
        'wp_embed_excerpt_attachment',
        'print_embed_comments_button',
        'print_embed_sharing_button',
        'print_embed_sharing_dialog',
        'the_embed_site_title',
        'get_wp_title_rss',
        'get_the_title_rss',
        'get_the_content_feed',
        'get_comment_author_rss',
        'get_the_category_rss',
        'prep_atom_text_construct',
        'get_feed_build_date',
        'get_html_split_regex',
        'wp_check_invalid_utf8',
        'sanitize_title_for_query',
        'sanitize_title_with_dashes',
        'stripslashes_from_strings_only',
        'wp_rel_nofollow_callback',
        'wp_targeted_link_rel',
        'get_gmt_from_date',
        'get_date_from_gmt',
        'iso8601_timezone_to_offset',
        'wp_make_link_relative',
        'links_add_base_url',
        'wp_strip_all_tags',
        'get_url_in_content',
        'print_emoji_detection_script',
        'maybe_hash_hex_color',
        'wp_maybe_decline_date',
        'wp_get_http_headers',
        'wp_removable_query_args',
        'get_status_header_desc',
        'wp_get_nocache_headers',
        'wp_original_referer_field',
        'wp_get_raw_referer',
        'wp_get_original_referer',
        'wp_get_upload_dir',
        'wp_get_image_mime',
        'wp_get_mime_types',
        'wp_get_ext_types',
        'get_allowed_mime_types',
        'wp_send_json_success',
        'wp_send_json_error',
        'wp_check_jsonp_callback',
        'wp_json_file_decode',
        'wp_parse_id_list',
        'wp_parse_slug_list',
        'wp_array_slice_assoc',
        'wp_is_numeric_array',
        'wp_filter_object_list',
        'wp_maybe_load_widgets',
        'wp_widgets_add_menu',
        'is_lighttpd_before_150',
        'wp_suspend_cache_addition',
        'wp_suspend_cache_invalidation',
        'get_main_site_id',
        'get_main_network_id',
        'is_site_meta_supported',
        'wp_timezone_override_offset',
        'wp_find_hierarchy_loop',
        'send_frame_options_header',
        'wp_debug_backtrace_summary',
        'wp_auth_check_load',
        'wp_auth_check_html',
        'mbstring_binary_safe_encoding',
        'wp_post_preview_js',
        'wp_raise_memory_limit',
        'wp_privacy_anonymize_ip',
        'wp_privacy_anonymize_data',
        'wp_privacy_exports_dir',
        'wp_privacy_exports_url',
        'wp_update_php_annotation',
        'is_wp_version_compatible',
        'is_php_version_compatible',
        'wp_fuzzy_number_match',
        'wp_add_inline_script',
        'wp_set_script_translations',
        'wp_script_add_data',
        'wp_add_inline_style',
        'wp_style_add_data',
        'get_site_icon_url',
        'wp_get_document_title',
        'post_type_archive_title',
        'get_the_archive_title',
        'get_the_archive_description',
        'delete_get_calendar_cache',
        'get_the_modified_date',
        'get_the_modified_time',
        'get_post_modified_time',
        'wp_dependencies_unique_hosts',
        'wp_enqueue_code_editor',
        'wp_admin_css_color',
        'register_admin_color_schemes',
        'wp_admin_css_uri',
        'wp_get_global_settings',
        'wp_get_global_styles',
        'wp_get_global_stylesheet',
        'wp_safe_remote_request',
        'wp_safe_remote_get',
        'wp_safe_remote_post',
        'wp_safe_remote_head',
        'wp_remote_retrieve_headers',
        'wp_remote_retrieve_header',
        'wp_remote_retrieve_body',
        'wp_remote_retrieve_cookies',
        'wp_remote_retrieve_cookie',
        'get_allowed_http_origins',
        'is_allowed_http_origin',
        'wp_http_validate_url',
        'allowed_http_request_hosts',
        'wp_is_using_https',
        'wp_is_https_supported',
        'wp_schedule_https_detection',
        'wp_kses_one_attr',
        'wp_kses_allowed_html',
        'wp_kses_uri_attributes',
        'wp_kses_attr_check',
        'wp_kses_attr_parse',
        'wp_kses_hair_parse',
        'wp_kses_bad_protocol',
        'wp_kses_no_null',
        'wp_kses_array_lc',
        'wp_kses_html_error',
        'wp_kses_normalize_entities',
        'wp_kses_named_entities',
        'wp_kses_normalize_entities2',
        'wp_kses_normalize_entities3',
        'wp_kses_decode_entities',
        'wp_filter_post_kses',
        'wp_kses_post_deep',
        'wp_filter_nohtml_kses',
        'translate_with_gettext_context',
        'load_child_theme_textdomain',
        'get_translations_for_domain',
        'wp_get_installed_translations',
        'post_comments_feed_link',
        'get_author_feed_link',
        'get_category_feed_link',
        'get_term_feed_link',
        'get_tag_feed_link',
        'get_edit_tag_link',
        'get_edit_term_link',
        'get_search_feed_link',
        'get_preview_post_link',
        'get_edit_post_link',
        'get_delete_post_link',
        'get_edit_comment_link',
        'get_edit_bookmark_link',
        'get_edit_user_link',
        'adjacent_posts_rel_link',
        'next_post_rel_link',
        'prev_post_rel_link',
        'get_previous_post_link',
        'get_next_post_link',
        'get_adjacent_post_link',
        'get_next_posts_link',
        'get_previous_posts_link',
        'get_posts_nav_link',
        'get_the_post_navigation',
        'get_the_posts_navigation',
        'get_the_posts_pagination',
        'get_comments_pagenum_link',
        'get_next_comments_link',
        'get_previous_comments_link',
        'get_the_comments_navigation',
        'get_the_comments_pagination',
        'get_edit_profile_url',
        'wp_get_canonical_url',
        'wp_shortlink_wp_head',
        'is_avatar_comment_type',
        'get_theme_file_uri',
        'get_theme_file_path',
        'get_privacy_policy_url',
        'the_privacy_policy_link',
        'wp_get_server_protocol',
        'wp_fix_server_vars',
        'wp_get_environment_type',
        'wp_is_maintenance_mode',
        'wp_set_lang_dir',
        'wp_set_wpdb_vars',
        'wp_start_object_cache',
        'wp_get_mu_plugins',
        'wp_skip_paused_plugins',
        'wp_skip_paused_themes',
        'wp_is_recovery_mode',
        'is_protected_ajax_action',
        'wp_set_internal_encoding',
        'get_current_blog_id',
        'get_current_network_id',
        'wp_load_translations_early',
        'wp_is_json_request',
        'wp_is_jsonp_request',
        'wp_is_xml_request',
        'wp_underscore_audio_template',
        'wp_underscore_video_template',
        'wp_print_media_templates',
        'set_post_thumbnail_size',
        'image_make_intermediate_size',
        'wp_image_matches_ratio',
        'image_get_intermediate_size',
        'get_intermediate_image_sizes',
        'wp_get_attachment_image',
        'wp_calculate_image_srcset',
        'wp_calculate_image_sizes',
        'wp_lazy_loading_enabled',
        'wp_filter_content_tags',
        'wp_underscore_playlist_templates',
        'wp_get_audio_extensions',
        'wp_get_video_extensions',
        'get_previous_image_link',
        'get_next_image_link',
        'get_adjacent_image_link',
        'get_taxonomies_for_attachments',
        'wp_max_upload_size',
        'wp_get_image_editor',
        'wp_image_editor_supports',
        'wp_plupload_default_settings',
        'get_post_galleries_images',
        'get_post_gallery_images',
        'attachment_url_to_postid',
        'wpview_media_sandbox_styles',
        'wp_get_webp_info',
        'get_metadata_by_mid',
        'update_metadata_by_mid',
        'delete_metadata_by_mid',
        'registered_meta_key_exists',
        'get_registered_meta_keys',
        'wpmu_update_blogs_date',
        'get_blogaddress_by_id',
        'get_blogaddress_by_name',
        'get_id_from_blogname',
        'clean_site_details_cache',
        'clear_global_post_cache',
        'get_most_active_blogs',
        'wpmu_admin_do_redirect',
        'get_blogaddress_by_domain',
        'is_user_option_local',
        'add_user_to_blog',
        'remove_user_from_blog',
        'is_email_address_unsafe',
        'wpmu_validate_user_signup',
        'wpmu_validate_blog_signup',
        'wpmu_signup_blog_notification',
        'wpmu_signup_user_notification',
        'wpmu_welcome_user_notification',
        'wpmu_log_new_registrations',
        'welcome_user_msg_filter',
        'wp_update_network_counts',
        'get_upload_space_available',
        'is_upload_space_available',
        'upload_size_limit_filter',
        'wp_is_large_network',
        'get_subdirectory_reserved_names',
        'get_network_by_path',
        'get_site_by_path',
        'get_current_site_name',
        'wp_prepare_site_data',
        'wp_normalize_site_data',
        'wp_validate_site_data',
        'wp_is_site_initialized',
        'walk_nav_menu_tree',
        'get_registered_nav_menus',
        'get_nav_menu_locations',
        'is_nav_menu_item',
        'wp_create_nav_menu',
        'wp_delete_nav_menu',
        'wp_get_nav_menus',
        'wp_protect_special_option',
        'get_all_user_settings',
        'delete_all_user_settings',
        'get_user_by_email',
        'wp_get_cookie_login',
        'wp_set_current_user',
        'wp_get_current_user',
        'wp_validate_auth_cookie',
        'wp_generate_auth_cookie',
        'wp_parse_auth_cookie',
        'wp_set_auth_cookie',
        'wp_clear_auth_cookie',
        'is_user_logged_in',
        'wp_password_change_notification',
        'wp_new_user_notification',
        'apply_filters_ref_array',
        'do_action_ref_array',
        'wp_register_plugin_realpath',
        'get_post_format_strings',
        'get_post_format_slugs',
        'get_post_format_string',
        'get_post_format_link',
        'walk_page_dropdown_tree',
        'wp_get_attachment_link',
        'get_the_password_form',
        'get_page_template_slug',
        'wp_post_revision_title',
        'wp_list_post_revisions',
        'get_post_thumbnail_id',
        'update_post_thumbnail_cache',
        'get_the_post_thumbnail',
        'the_post_thumbnail_url',
        'the_post_thumbnail_caption',
        'create_initial_post_types',
        'get_post_mime_type',
        'get_post_status_object',
        'is_post_type_hierarchical',
        'get_post_type_object',
        'get_post_type_capabilities',
        'get_post_type_labels',
        'add_post_type_support',
        'remove_post_type_support',
        'is_post_type_viewable',
        'is_post_status_viewable',
        'is_post_publicly_viewable',
        'get_post_custom_keys',
        'get_post_custom_values',
        'get_post_mime_types',
        'wp_match_mime_types',
        'wp_trash_post_comments',
        'wp_untrash_post_comments',
        'wp_get_post_categories',
        'wp_get_post_tags',
        'wp_get_post_terms',
        'wp_get_recent_posts',
        'wp_resolve_post_date',
        'wp_unique_post_slug',
        'wp_add_post_tags',
        'wp_set_post_tags',
        'wp_set_post_terms',
        'wp_set_post_categories',
        'wp_transition_post_status',
        'wp_after_insert_post',
        'get_all_page_ids',
        'get_page_by_path',
        'get_page_by_title',
        'wp_delete_attachment_files',
        'wp_get_attachment_metadata',
        'wp_update_attachment_metadata',
        'wp_get_attachment_url',
        'wp_get_attachment_caption',
        'wp_attachment_is_image',
        'wp_mime_type_icon',
        'wp_delete_auto_drafts',
        'get_queried_object_id',
        'is_post_type_archive',
        'wp_old_slug_redirect',
        'rest_api_register_rewrites',
        'rest_api_default_filters',
        'create_initial_rest_routes',
        'rest_get_url_prefix',
        'rest_handle_deprecated_function',
        'rest_handle_deprecated_argument',
        'rest_send_cors_headers',
        'rest_handle_options_request',
        'rest_send_allow_header',
        'rest_filter_response_fields',
        'rest_is_field_included',
        'rest_output_link_header',
        'rest_cookie_check_errors',
        'rest_cookie_collect_status',
        'rest_get_avatar_urls',
        'rest_get_avatar_sizes',
        'rest_parse_hex_color',
        'rest_authorization_required_code',
        'rest_validate_request_arg',
        'rest_sanitize_request_arg',
        'rest_parse_request_arg',
        'rest_is_ip_address',
        'rest_are_values_equal',
        'rest_preload_api_request',
        'rest_parse_embed_param',
        'wp_save_post_revision',
        'wp_get_post_autosave',
        'wp_is_post_revision',
        'wp_is_post_autosave',
        'wp_get_post_revision',
        'wp_restore_post_revision',
        'wp_delete_post_revision',
        'wp_get_post_revisions',
        'wp_revisions_to_keep',
        'wp_robots_noindex_embeds',
        'wp_robots_noindex_search',
        'wp_robots_no_robots',
        'wp_robots_sensitive_page',
        'wp_register_tinymce_scripts',
        'wp_default_packages_vendor',
        'wp_get_script_polyfill',
        'wp_default_packages_scripts',
        'wp_tinymce_inline_scripts',
        'wp_scripts_get_suffix',
        'wp_prototype_before_jquery',
        'wp_localize_community_events',
        'wp_style_loader_src',
        'wp_print_head_scripts',
        'wp_print_footer_scripts',
        'wp_enqueue_global_styles',
        'enqueue_block_styles_assets',
        'wp_sanitize_script_attributes',
        'wp_get_script_tag',
        'wp_print_script_tag',
        'wp_maybe_inline_styles',
        'get_shortcode_atts_regex',
        'wp_sitemaps_get_server',
        'wp_get_sitemap_providers',
        'wp_register_sitemap_provider',
        'get_objects_in_term',
        'get_term_to_edit',
        'term_is_ancestor_of',
        'wp_get_object_terms',
        'wp_set_object_terms',
        'wp_add_object_terms',
        'wp_remove_object_terms',
        'wp_unique_term_slug',
        'wp_defer_term_counting',
        'wp_update_term_count',
        'clean_object_term_cache',
        'get_object_term_cache',
        'update_object_term_cache',
        'wp_get_split_terms',
        'wp_get_split_term',
        'wp_term_is_shared',
        'is_object_in_term',
        'is_object_in_taxonomy',
        'get_front_page_template',
        'get_privacy_policy_template',
        'wp_enable_block_templates',
        'wp_clean_themes_cache',
        'get_stylesheet_directory_uri',
        'get_locale_stylesheet_uri',
        'get_template_directory_uri',
        'get_theme_root_uri',
        'get_raw_theme_root',
        'get_header_image_tag',
        'the_header_image_tag',
        'get_random_header_image',
        'is_random_header_image',
        'get_uploaded_header_images',
        'get_header_video_url',
        'the_header_video_url',
        'get_header_video_settings',
        'is_header_video_active',
        'get_custom_header_markup',
        'the_custom_header_markup',
        'wp_custom_css_cb',
        'wp_get_custom_css',
        'get_theme_starter_content',
        'require_if_theme_supports',
        'get_registered_theme_features',
        'get_registered_theme_feature',
        'wp_customize_support_script',
        'create_initial_theme_features',
        'wp_is_block_theme',
        'wp_maybe_auto_update',
        'wp_get_translation_updates',
        'wp_get_update_data',
        'wp_schedule_update_checks',
        'wp_clean_update_cache',
        'wp_authenticate_username_password',
        'wp_authenticate_email_password',
        'wp_authenticate_application_password',
        'wp_validate_application_password',
        'wp_authenticate_spam_check',
        'count_many_users_posts',
        'get_current_user_id',
        'get_blogs_of_user',
        'wp_get_password_hint',
        'get_password_reset_key',
        'check_password_reset_key',
        'wp_get_session_token',
        'wp_get_all_sessions',
        'wp_destroy_current_session',
        'wp_destroy_other_sessions',
        'wp_destroy_all_sessions',
        'wp_create_user_request',
        'wp_send_user_request',
        'wp_get_user_request',
        'wp_register_sidebar_widget',
        'wp_unregister_sidebar_widget',
        'wp_register_widget_control',
        'wp_unregister_widget_control',
        'wp_get_sidebars_widgets',
        'wp_set_sidebars_widgets',
        'wp_get_widget_defaults',
        'wp_convert_widget_settings',
        'wp_map_sidebars_widgets',
        'wp_widget_rss_output',
        'wp_widget_rss_form',
        'wp_widget_rss_process',
        'wp_parse_widget_id',
        'wp_find_widgets_sidebar',
        'wp_render_widget_control',
        'wp_login_viewport_meta',
        'validate_another_blog_signup',
        'confirm_another_blog_signup',
        'signup_get_available_languages',
    ];
