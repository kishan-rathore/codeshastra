import datetime
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# AWS_FILE_EXPIRE = 200
# AWS_PRELOAD_METADATA = True
# AWS_QUERYSTRING_AUTH = True
#
# DEFAULT_FILE_STORAGE = 'codeshastra.aws.utils.MediaRootS3BotoStorage'
# STATICFILES_STORAGE = 'codeshastra.aws.utils.StaticRootS3BotoStorage'
# AWS_STORAGE_BUCKET_NAME = 'codeshastra'
# S3DIRECT_REGION = 'us-west-2'
# S3_URL = '//%s.s3.amazonaws.com/' % AWS_STORAGE_BUCKET_NAME
# MEDIA_URL = '//%s.s3.amazonaws.com/media/' % AWS_STORAGE_BUCKET_NAME
# MEDIA_ROOT = MEDIA_URL
# STATIC_URL = S3_URL + 'static/'
# ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'
#
# two_months = datetime.timedelta(days=61)
# date_two_months_later = datetime.date.today() + two_months
# expires = date_two_months_later.strftime("%A, %d %B %Y 20:00:00 GMT")
#
# AWS_HEADERS = {
#     'Expires': expires,
#     'Cache-Control': 'max-age=%d' % (int(two_months.total_seconds()), ),
# }

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_KEY')
AWS_STORAGE_BUCKET_NAME = 'codeshastra'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


