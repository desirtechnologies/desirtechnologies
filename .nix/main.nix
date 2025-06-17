{ pkgs ? import <nixpkgs> {} }:

let
  nodejs = pkgs.nodejs;
  astro = pkgs.callPackage ./astro.nix { inherit nodejs; };
in
{
  devshell = {
    name = "astro-devshell";
    description = "Astro development environment";

    packages = [ nodejs astro ];

    env = {
      NIX_LINTER = "nix-linter";

      # Environment variables used by Astro
      ASTRO_PORT = "3000";
      ASTRO_BASE_URL = "/";
      ASTRO_PUBLIC_URL = "/";
      ASTRO_ENV = "development";
      ASTRO_SSR = "false";
      ASTRO_TRACING = "false";
      ASTRO_HMR = "true";
    };

    shellHook = ''
      echo "Welcome to the Astro development environment!"
      echo "You can start the development server with 'astro dev'."
    '';

    # Log errors on failure
    postShellHook = ''
      if [ $? -ne 0 ]; then
        echo "Error: Shell hook failed."
        ls -l
      fi
    '';

    # Log errors on failure
    postBashHook = ''
      if [ $? -ne 0 ]; then
        echo "Error: Bash hook failed."
        ls -l
      fi
    '';
  };
}