// ==UserScript==
// @id             vk.com-da3b91f1-5cdc-46e4-a4a9-1a55e1f21a1b@inoyakaigor.ru
// @name           Disign fix for VK
// @version        1.0.75
// @namespace      inoyakaigor.ru
// @author         Игорь InoY Звягинцев
// @description    Изменяет заголовки новостей в ленте, ставит тень вокруг фото, изменяет авы и убирает away.php из ссылок на внешние сайты
// @include        *vk.com/*
// @updateURL      http://inoyakaigor.ru/progs/userscripts/vk_design_fix.user.js
// @run-at         document-end
// ==/UserScript==

var css = ".feed_article_title{\
font-size: 18px;\
color: black;\
text-shadow: 1px 1px 0.2px rgba(129, 129, 129, 0.29);\
}\
.wk_extpage_title {\
  text-shadow: 1px 1px 1px white,1px 1px 2px silver;\
}\
#page_avatar {\
  box-shadow: 0 0 5px 0px gray;\
}\
.no_select.pv_data > a > img {\
    box-shadow: 0 0 10px 0 #808080;\
}\
.im_new_msg .im_log_author, .im_new_msg .im_log_body, .im_new_msg .im_log_date{\
  /*background: skyblue;*/\
}\
.test, .feed_friend_image, a.wk_extpage_owner_thumb, #search_content .three_col_row .img, .fans_fanph_wrap, .fans_idolph_wrap, .friends_bigph_wrap, .wk_likes_likerph_wrap, .wk_pollph_wrap, .wk_poll_usr, .fave_uph_wrap, img.im_user_holder, .im_photo_holder, a.post_image > img,.dialogs_photo > img, .dialogs_photo > a > img, notifier_image, .wide_wall_module a.reply_image, .wide_wall_module img.reply_image, div.feedback_row_photo > a > img.feedback_row_photo, a.reply_form_image, div.pv_thumb > a > img, .ts_contact_photo img, .pad_fr_phwrap, div.im_log_author_chat_thumb, .dialogs_msg_body .dialogs_inline_author, .published_by_photo > img, a.fc_msgs_author, img.fc_contact_photo, a.feedback_group_photo, img.fc_tab_txt_self, .wall_module a.reply_image, #dark_box_ava.pb_ava, .page_list_module .thumb img, .audio_friend_photo, .im_friend img, .pad_fr_common a img, a.ava > img, div.friends_bigph_wrap, .public_contacts_list .image, div.im_chatbox_mem_photo, a.fl_l.pad_nws_photo, .pad_msga_photo, .pad_nwsa_photo, .fw_reply_thumb, a.fl_l.pad_msg_photo, .wk_extpage_friend_subscribed, .like_tt_usr, .poll_tt_usr, .group_row_photo, .gle_thumb, .wddi_thumb, .wdd_img_full, .wl_owner_head_thumb, .fw_post_thumb, .tickets_image, .tu_thumb, .gedit_user_bigph_wrap, a.mention_tt_photo, a.mention_tt_person, .mv_thumb, td.flist_item_img img, .pad_gr_phwrap, .pad_mini_friend , td.notifier_image_wrap > div, #friends .user_block .img, img.feedback_row_photo, .bp_thumb, .ba_thumb, .chat_tab_imgcont > img, #pv_author_img {\
  border-radius: 0px;\
  border-radius: 50px;\
  box-shadow: 0px 0px 2px 1px grey;\
  box-shadow: 0px 0px 0px 1px white, 1px 2px 2px #8F8F8F;\
}\
div.feedback_row_photo{\
  height: 53px;\
}\
div.ta_r > a > img.feedback_row_photo {\
  border-radius: 0 0 0 0 !important;\
  box-shadow: none !important;\
}\
.pv_thumb, .page_list_module .thumb{\
  overflow: inherit !important;\
}\
.im_friend img {\
  padding-right: 0px;\
}\
div.im_chatbox_mem_photo {\
  padding-right: 0px;\
  margin-right: 15px;\
}\
.fw_reply_thumb {\
  margin-right: 11px;\
  width: 50px;\
}\
.wk_extpage_friend_subscribed{\
  height: 26px;\
  width: 26px;\
}\
.like_tt_usr {\
  margin: 2px 5px 0 1px;\
}\
b.wddi_thumb {\
  width: 32px;\
  margin-right: 6px;\
}\
.im_tab{\
  border-radius: 11px;\
}\
.fw_post_thumb{\
  width: 50px;\
  margin-right: 11px;\
}\
.tickets_image {\
  height: 50px;\
  margin-right: 15px;\
  overflow: hidden;\
  width: 50px;\
}\
/*.notifier_baloon_msg wrapped{*/\
.gedit_user_bigph_wrap{\
  width: 100px;\
  height: 100px;\
  overflow: hidden;\
  margin-right: 15px;\
}\
a.mention_tt_person {\
  margin: 0px 6px 2px 1px;\
}\
.mv_thumb{\
  overflow:hidden;\
  width: 50px;\
  margin-right: 10px;\
}\
.pad_gr_friends {\
  overflow: visible;\
}\
.bp_thumb, .ba_thumb{\
  width: 50px;\
  margin-right: 15px;\
 }\
 .im_sticker_row > img, img.im_gift {\
  height: 40px;\
}\
.fans_idolph_wrap {\
  margin-right: 10px;\
  width: 100px;\
.notifier_baloon {\
  border-radius: 2px;\
}\
.chat_tab_counter{\
  border-radius: 0px;\
.page_album_title_wrap {\
  background: linear-gradient(to top, #000 40%, rgba(0, 0, 0, 0));\
}\
.img_link > img:hover {\
    transform: scale(1.1);\
}\
.img_link > img {\
    transition: all 0.5s ease 0s;\
};"
var style = document.createElement("STYLE");
//style.type = "text/css";
style.innerHTML = css;
document.body.appendChild(style);
