import { useStore } from "../..";
import { Text, For, Show, Fragment } from "@components";

export default function MyComponent(props) {
  const state = useStore({
    activeCategory: "appetizers",
    activeSection: "home",
    setActiveCategory(category) {
      state.activeCategory = category;
    },
    setActiveSection(section) {
      state.activeSection = section;
    },
    scrollToSection(sectionId) {
      state.setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    dataBuilderList1: ["appetizers", "mains", "desserts", "beverages"],
    categoryColors: [
      {
        bg: "linear-gradient(135deg, rgb(255, 107, 107), rgb(255, 142, 83))",
        text: "white",
      },
      // appetizers - coral gradient
      {
        bg: "linear-gradient(135deg, rgb(72, 187, 120), rgb(56, 178, 172))",
        text: "white",
      },
      // mains - green-teal gradient
      {
        bg: "linear-gradient(135deg, rgb(196, 113, 237), rgb(147, 51, 234))",
        text: "white",
      },
      // desserts - purple gradient
      {
        bg: "linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))",
        text: "white",
      }, // beverages - blue gradient
    ],
    getCategoryColorScheme(index) {
      return state.categoryColors[index] || state.categoryColors[0];
    },
  });

  return (
    <div>>
      {/* Header with Navigation */}
      <header
>
        <div>>
          <div
>
            <text>
          </div>
          <nav
>
            <button>> {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  state.scrollToSection("menu");
                }
              }}
              onClick={(event) => {
                event.preventDefault();
                state.scrollToSection("menu");
              }}
              style={{
                color:
                  state.activeSection === "menu"
                    ? "rgb(121, 192, 255)"
                    : "rgb(255, 255, 255)",
                borderBottom:
                  state.activeSection === "menu"
                    ? "2px solid rgb(121, 192, 255)"
                    : "2px solid transparent",
              }}
              css={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                "&:hover": {
                  color: "rgb(121, 192, 255)",
                },
                "&:focus": {
                  outline: "2px solid rgb(121, 192, 255)",
                  "outline-offset": "2px",
                },
              }}
            >
              <text>
            </button>
            <button>> {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  state.scrollToSection("about");
                }
              }}
              onClick={(event) => {
                event.preventDefault();
                state.scrollToSection("about");
              }}
              style={{
                color:
                  state.activeSection === "about"
                    ? "rgb(121, 192, 255)"
                    : "rgb(255, 255, 255)",
                borderBottom:
                  state.activeSection === "about"
                    ? "2px solid rgb(121, 192, 255)"
                    : "2px solid transparent",
              }}
              css={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                "&:hover": {
                  color: "rgb(121, 192, 255)",
                },
                "&:focus": {
                  outline: "2px solid rgb(121, 192, 255)",
                  "outline-offset": "2px",
                },
              }}
            >
              <text>
            </button>
            <button
> {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  state.scrollToSection("contact");
                }
              }}
              onClick={(event) => {
                event.preventDefault();
                state.scrollToSection("contact");
              }}
              style={{
                color:
                  state.activeSection === "contact"
                    ? "rgb(121, 192, 255)"
                    : "rgb(255, 255, 255)",
                borderBottom:
                  state.activeSection === "contact"
                    ? "2px solid rgb(121, 192, 255)"
                    : "2px solid transparent",
              }}
              css={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 0",
                "&:hover": {
                  color: "rgb(121, 192, 255)",
                },
                "&:focus": {
                  outline: "2px solid rgb(121, 192, 255)",
                  "outline-offset": "2px",
                },
              }}
            >
              <text>
            </button>
          </nav>
          <button
> {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                // Handle reservation logic here
              }
            }}
            css={{
              backgroundColor: "rgb(26, 127, 55)",
              color: "rgb(255, 255, 255)",
              border: "none",
              borderRadius: "6px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s",
              "&:hover": {
                "background-color": "rgb(34, 139, 69)",
              },
              "&:focus": {
                outline: "2px solid rgb(121, 192, 255)",
                "outline-offset": "2px",
              },
            }}
          >
            <text>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
>
        <div>>
          <h1
>
            <text>
          </h1>
          <p>>
            <text>
          </p>
          <button
> {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                state.scrollToSection("menu");
              }
            }}
            onClick={(event) => {
              state.scrollToSection("menu");
            }}
            css={{
              backgroundColor: "rgb(121, 192, 255)",
              color: "rgb(13, 17, 23)",
              border: "none",
              borderRadius: "6px",
              padding: "16px 32px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s",
              "&:hover": {
                "background-color": "rgb(101, 172, 235)",
              },
              "&:focus": {
                outline: "2px solid rgb(255, 255, 255)",
                "outline-offset": "2px",
              },
            }}
          >
            <text>
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section
>
        <div>>
          <h2>>
            <text>
          </h2>
          <div
>
            {state.dataBuilderList1.map((category, index) => (
              <button>> state.setActiveCategory(category)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    state.setActiveCategory(category);
                  }
                }}
                style={{
                  background:
                    state.activeCategory === category
                      ? state.getCategoryColorScheme(index).bg
                      : "transparent",
                  color:
                    state.activeCategory === category
                      ? state.getCategoryColorScheme(index).text
                      : "rgb(139, 148, 158)",
                  borderBottom:
                    state.activeCategory === category
                      ? "none"
                      : "2px solid transparent",
                  transform:
                    state.activeCategory === category
                      ? "translateY(-2px)"
                      : "none",
                  boxShadow:
                    state.activeCategory === category
                      ? "0 8px 25px rgba(0, 0, 0, 0.3)"
                      : "none",
                }}
                css={{
                  border: "1px solid rgb(72, 79, 88)",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "16px 24px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    "box-shadow": "0 8px 25px rgba(0, 0, 0, 0.2)",
                    "border-color": "rgb(121, 192, 255)",
                  },
                  "&:focus": {
                    outline: "2px solid rgb(121, 192, 255)",
                    "outline-offset": "2px",
                  },
                }}
              >
                <text>
              </button>
            ))}
          </div>
          <div
>
            {/* Menu items for each category would go here */}
            {/* This is where all your menu items are rendered based on activeCategory */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>>
        <div
>
          <h2>>
            <text>
          </h2>
          {/* About content would go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section
>
        <div
>
          <h>
>
            <text>
          </h2>
          {/* Contact content would go here */}
        </div>
      </section>

      {/* Footer */}
      <footer>>
        <div>>
          <div>>
            <div>
              <h3>>
                <text>
              </h3>
              <p>>
                <text>
              </p>
            </div>
            {/* Additional footer columns would go here */}
          </div>
          <div>>
            <p>
              <text>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}