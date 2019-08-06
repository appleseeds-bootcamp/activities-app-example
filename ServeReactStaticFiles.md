# Steps for serving REACT as static files in DJANGO:

## Build frontend with NPM
```
$ cd ../frontend
$ npm run build
```

## settings.py:
```
# Create const for the FE build dir:
FE_BUILD_DIR = os.path.join(BASE_DIR,"../FE/build")

# Add the FE build dir in the templates['DIRS'] array
TEMPLATES = [
	...
	'DIRS': [
            FE_BUILD_DIR
        ],
	...
]

# Paths for static files dir (necessary to make it work)
STATICFILES_DIRS = [
    os.path.join(FE_BUILD_DIR, 'static'),
]

STATIC_ROOT=os.path.join(BASE_DIR,'static')
```

##urls.py:
```
...
from django.views.generic import TemplateView
...

urlpatterns = [
    ...
    url(r'^.*', TemplateView.as_view(template_name="index.html"))
]
```