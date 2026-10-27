"""Open the standalone BEACON website in the default browser."""

from pathlib import Path
import webbrowser


WEBSITE = Path(__file__).with_name("index.html")


def main():
    """Open the local HTML file; no Flask app or web server is started."""
    if not WEBSITE.is_file():
        raise FileNotFoundError(f"Website file not found: {WEBSITE}")

    if webbrowser.open(WEBSITE.as_uri()):
        print("BEACON opened in your default browser.")
    else:
        print("Open this file in a browser to view BEACON:")
        print(WEBSITE)


if __name__ == "__main__":
    main()