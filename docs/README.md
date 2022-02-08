# FastStore Integrations Theme

This is a minimal store theme to help the setup process of integrating your FastStore store with with VTEX modules that are still powered by Render and the Store Framework.

After installing this theme in a VTEX account, you should have:

- A minimal header consisting of a logo with a link associated to it.
- A MyAccount page.
- A Login page.
- An OrderPlaced page.
- A minimal footer consisting of VTEX's logo and a "Powered By" tagline.

## How to test this theme

1. Make sure you're logged in a VTEX account by running the following command in a terminal window:

```bash
$ vtex whoami
```

2. Create a new development workspace to test your changes in an isolated environment (replace `workspace-name` with the name you want to give your new workspace):

```bash
$ vtex use <workspace-name>
```

3. Install this theme to see how it would affect your current store:

```bash
$ vtex install storeframework.store-theme
```

## Making changes

You will likely need to change a few aspects of this theme to customize and actually use it in production, such as the store's logo. To do so, follow these steps:

1. Clone this repository to have a local copy in your machine and make sure to initialize a new git repo, since you'll be creating your own version of this repository. Run the following command, replacing `<local-repo-name>` with any name you like:

```bash
npx degit vtex/faststore-vtex-integrations <local-repo-name>
```

This command will create a local copy of this repository, but will **not** contain a `.git` folder. To make it a new git repository, run `git init`.

2. Make sure you're logged in a VTEX account by running the following command in a terminal window:

```bash
$ vtex whoami
```

3. Create a new development workspace to test your changes in an isolated environment (replace `workspace-name` with the name you want to give your new workspace):

```bash
$ vtex use <workspace-name>
```

4. Change the `vendor` field in your theme's `manifest.json` file:

```json
{
  "vendor": "<your-account-name>",
}
```

5. Now any changes you make should be reflected in your workspace.

## Updating the header

1. Make sure you're logged in a VTEX account by running the following command in a terminal window:

```bash
$ vtex whoami
```

2. Create a new development workspace to test your changes in an isolated environment (replace `workspace-name` with the name you want to give your new workspace):

```bash
$ vtex use <workspace-name>
```

3. Add the logo image you want to use to the `assets` folder.

4. Open the `store/blocks/header.jsonc` file, and change the following:

```diff
"logo#desktop": {
  "props": {
    "title": "Logo",
-    "href": "https://vtexfaststore.com/",
+    "href": "<your-store-home-page>",
-    "url": "assets/faststore-logo.png",
+    "url": "assets/<your-new-logo>",
    "width": "180"
  }
},

//...

"logo#mobile": {
  "props": {
    "title": "Logo",
-    "href": "https://vtexfaststore.com/",
+    "href": "<your-store-home-page>",
-    "url": "assets/faststore-logo.png",
+    "url": "assets/<your-new-logo>",
    "width": "90"
  }
}

```

5. If you want to change the header's styling, you can update both CSS files in the `styles` folder. For more guidance on how to customize the header or any other block in your theme, refer to our [documentation](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization).
