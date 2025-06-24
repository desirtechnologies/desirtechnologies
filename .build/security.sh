#!/bin/bash


function print_usage() {
    echo "Usage: $0 [OPTION] [DIRECTORY]"
    echo "Scan a directory for potential security vulnerabilities."
    echo ""
    echo "  -h, --help  show this help message and exit"
    echo "  -d, --dir   specify the directory to scan"
    echo "  -c, --check specify the type of check to perform"
    echo "              (default: npm)"
    echo ""
    echo "Example: $0 -d . -c npm"
    exit 1
}

function check_npm() {
    echo "Checking npm packages..."
    npm ls --depth=0
}

function check_yarn() {
    echo "Checking yarn packages..."
    yarn ls --depth=0
}

function check_pip() {
    echo "Checking pip packages..."
    pip list --format=legacy
}

function check_gem() {
    echo "Checking gem packages..."
    gem list --no-versions
}

function check_composer() {
    echo "Checking composer packages..."
    composer show --installed --no-ansi --no-interaction --format=json | jq -r '.[] | .name + " " + .version'
}

function check_pipfile() {
    echo "Checking pip packages in Pipfile..."
    pipenv --site-packages --venv run pip list --format=legacy
}

function check_java() {
    echo "Checking java packages..."
    find -type f -name "*.jar"
}

function check_go() {
    echo "Checking go packages..."
    go list -f '{{.ImportPath}} {{.Version}}'
}

function check_node() {
    echo "Checking node packages..."
    find node_modules -type f -name "package.json" -exec jq -r '.name + " " + .version' {} \;
}

function check_rust() {
    echo "Checking rust packages..."
    find target/debug/deps -type f -name "*.rlib" -exec cargo tree -f '{{.name}} {{.version}}' {} \;
}

function check_perl() {
    echo "Checking perl packages..."
    cpan -l | grep -v "^  "
}

function check_php() {
    echo "Checking php packages..."
    composer show --installed --no-ansi --no-interaction --format=json | jq -r '.[] | .name + " " + .version'
}

function check_ruby() {
    echo "Checking ruby packages..."
    gem list --no-versions
}

function check_python() {
    echo "Checking python packages..."
    pip list --format=legacy
}

function check_r() {
    echo "Checking R packages..."
    Rscript -e "installed.packages()[,c(\"Package\",\"Version\")]"
}

function check_docker() {
    echo "Checking Docker containers..."
    docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.RunningFor}}\t{{.Ports}}\t{{.Status}}"
}

function check_kubernetes() {
    echo "Checking Kubernetes pods..."
    kubectl get pods --all-namespaces
}

function check_openstack() {
    echo "Checking OpenStack instances..."
    openstack server list
}

