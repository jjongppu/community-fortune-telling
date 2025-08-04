# name: community-fortune-telling
# about: 오늘의 커뮤니티 운세를 보여주는 Discourse 플러그인
# version: 0.1
# authors: Your Name
# url: https://github.com/yourname/community-fortune-telling

enabled_site_setting :community_fortune_enabled

register_asset "stylesheets/common/community-fortune.scss"

after_initialize do
  # 클라이언트 전용 기능
end
