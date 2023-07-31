
document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.switch').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('.switch-on').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.switch').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.box-menu-link-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.link-nav-bar-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.burger-menu-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.close-menu-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.link-page-menu-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.social-link-nav-bar-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.box-menu-button-source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_1_106_aa_black_sans_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.body_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.section_footer_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.section_pic_border').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.section_banner_sub').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.span_color_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_4_40_400_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_3_56_400_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_2_80_400_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.text_20_500_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.text_16_500_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_5_32_400_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.text_12_aa_500_green_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.logo_resource_site').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.link_footer_page').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.link_cms_page_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.text_field_banner_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.text_20_500_white_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.nav_bar_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.icon_search_nav_bar_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.logo_link_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.logo-nav-bar-one').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.logo-nav-bar-two').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_2_40_500_sans_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.parag_16_400_secondary_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.section_contact_us_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.box_right_form_contact_us_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.h_2_40_500_ed_black_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.parag_14_400_secondary_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.check_main').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.block_radio_form_contact_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.block_radio_bg_one_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.block_radio_bg_two_source').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.block_radio_bg_source_two').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.block_radio_source_two_bg').forEach(target => target.classList.add('off'));
      document.querySelectorAll('.box_sub_menu_source').forEach(target => target.classList.add('off'));
    
      }
      else{ 
      document.querySelectorAll('.switch-off').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.switch').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.box-menu-link-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.link-nav-bar-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.burger-menu-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.close-menu-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.link-page-menu-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.social-link-nav-bar-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.box-menu-button-source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_1_106_aa_black_sans_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.body_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.section_footer_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.section_pic_border').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.section_banner_sub').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.span_color_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_4_40_400_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_3_56_400_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_2_80_400_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.text_20_500_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.text_16_500_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_5_32_400_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.text_12_aa_500_green_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.logo_resource_site').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.link_footer_page').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.link_cms_page_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.text_field_banner_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.text_20_500_white_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.nav_bar_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.icon_search_nav_bar_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.logo_link_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.logo-nav-bar-one').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.logo-nav-bar-two').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_2_40_500_sans_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.parag_16_400_secondary_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.section_contact_us_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.box_right_form_contact_us_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.h_2_40_500_ed_black_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.parag_14_400_secondary_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.check_main').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.block_radio_form_contact_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.block_radio_bg_one_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.block_radio_bg_two_source').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.block_radio_bg_source_two').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.block_radio_source_two_bg').forEach(target => target.classList.remove('off'));
      document.querySelectorAll('.box_sub_menu_source').forEach(target => target.classList.remove('off'));
     
      } 
    });
 });
});

