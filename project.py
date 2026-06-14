import os

OUTPUT_FILE = "CCMS_FULL_SOURCE_CODE.txt"

IGNORE_DIRS = {
    "node_modules",
    ".git",
    "dist",
    "android/.gradle",
    "android/build",
    "android/app/build",
    "ios",
    ".idea",
    ".vscode",
    "__pycache__",
    "coverage"
}

INCLUDE_EXTENSIONS = {
    ".tsx",
    ".ts",
    ".js",
    ".jsx",
    ".css",
    ".scss",
    ".html",
    ".json",
    ".csv",
    ".md",
    ".txt",
    ".xml"
}


def should_skip(path):
    parts = path.split(os.sep)

    for p in parts:
        if p in IGNORE_DIRS:
            return True

    return False


def print_tree(start_path, out):

    out.write("=" * 100 + "\n")
    out.write("PROJECT STRUCTURE\n")
    out.write("=" * 100 + "\n\n")

    for root, dirs, files in os.walk(start_path):

        dirs[:] = [
            d for d in dirs
            if not should_skip(os.path.join(root, d))
        ]

        level = root.replace(start_path, "").count(os.sep)

        indent = " " * 2 * level

        out.write(f"{indent}{os.path.basename(root)}/\n")

        subindent = " " * 2 * (level + 1)

        for f in sorted(files):
            out.write(f"{subindent}{f}\n")

    out.write("\n\n")


def dump_files(start_path, out):

    for root, dirs, files in os.walk(start_path):

        dirs[:] = [
            d for d in dirs
            if not should_skip(os.path.join(root, d))
        ]

        for file in sorted(files):

            ext = os.path.splitext(file)[1]

            if ext.lower() not in INCLUDE_EXTENSIONS:
                continue

            full_path = os.path.join(root, file)

            if should_skip(full_path):
                continue

            try:

                out.write("\n")
                out.write("#" * 120 + "\n")
                out.write(f"FILE : {full_path}\n")
                out.write("#" * 120 + "\n\n")

                with open(
                    full_path,
                    "r",
                    encoding="utf-8",
                    errors="ignore"
                ) as f:

                    out.write(f.read())

                out.write("\n\n")

            except Exception as e:

                out.write(
                    f"\nERROR READING {full_path}\n"
                )

                out.write(str(e))
                out.write("\n\n")


def main():

    root = "."

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as out:

        out.write("=" * 100 + "\n")
        out.write("CCMS FULL SOURCE CODE DUMP\n")
        out.write("=" * 100 + "\n\n")

        print_tree(root, out)

        dump_files(root, out)

    print()
    print("=" * 60)
    print("DONE")
    print("=" * 60)
    print()
    print(f"Output File : {OUTPUT_FILE}")


if __name__ == "__main__":
    main()