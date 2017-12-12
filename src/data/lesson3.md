### Module 3, Lesson 1

# Navigating Unity's Interface

Before you start with Unity, create a Unity 3D account. This gives you access to the asset store. You can create an account
                [here](https://id.unity.com/en/conversations/7a782341-a8f2-4c20-b2af-82e8dd1f8f4b001f?view=register). Or go to [www.unity3d.com](http://www.unity3d.com) and click the icon with the person in the upper right side of the screen.

## Demo Project: First person character controller

We will start with an empty Unity project, all tools we need can be imported from Unity’s standard assets package that is included with every download of Unity.

Start the Unity application (double-click on the desktop icon) and you'll be given the project selection screen where we will now create a new Unity project. In this window, we will specify a name for our project, as well as a location.

Project Name: type a name of your choice, for example MyFirstProject!

Location: click on the three dots located to the right of the label and select where on your hard drive you would like to save the project.

2D/3D: for this project, we will be using a three-dimensional environment; therefore, we will click on the 3D icon. As we will see later, you can create both 2D and 3D games with Unity, and projects are setup accordingly.

Assets/Packages: we will leave this option as default, as we will identify later the assets that will be necessary for our first project.

Once you have entered this information, you can now click on the button labeled Create Project. When Unity starts-up, a window labeled Unity Editor Update Check appears. This window is there to check whether you have the latest version of Unity and to let you know of any recent updates available. If an update is necessary, you can install it; if you would prefer not to see this message displayed every time you start Unity, you can uncheck the corresponding box labeled Check for Updates accordingly.

![](../assets/img/module3/module3-checkupdates.png)

This should be what you see as you open Unity (it might be a different color of grey if using Unity Personal).

![](../assets/img/module3/module3-openingUnity.png)

The first thing I am going to do is change the layout to one that will give you a better idea of how the camera, the game, and the scene view interact. I'm going to change it to the 2 by 3 layout which we'll be using for the attached images of Unity.

![](../assets/img/module3/module3-2by3layout.png)

(OPTIONAL) Finally, just for clarity, I like to change the project view to the One Column Layout so that it looks like a regular file system.

![](../assets/img/module3/module3-onecollayout.png)

Once we have those quick tweaks out of the way, we will just be looking at the project view.

It is important that you understand that this is the same view as a folder view. Open the project folder > assets and make a new folder in your regular view (outside of Unity) and demonstrate that it appears inside of Unity when you tab back to the program. Any image or file you add to Unity will appear there, and vice versa. This is the basic way that Unity knows what to combine into the game we’re making.

It’s a good idea before getting into the nitty gritty details to ask yourself what you think each part of Unity might be used for. Food for thought: draw comparisons between the scene view and the game view in Unity and the camera and perspectives of video games. How are they similar? How are they different? Why?

## Interface Basics Resource

Here we will go over the various parts of the Unity interface. Please refer to the image following this section.

1.  The Hierarchy window: this window or view lists all the objects currently present in your scene; these could include, for example, basic shapes, 3D characters, or terrains. This view also makes it possible to identify a hierarchy between objects; for example, we can see in this view if some objects have children or parents (we will explore this concept later).

2.  The Scene view: this window displays the content of a scene (or the item listed in the Hierarchy view) so that you can visualize them and modify them accordingly using the mouse (e.g., move, scale, etc.).

3.  The Game view: this window makes it possible to visualize the scene as it will appear in the game (i.e., through the lenses of the active camera).

4.  The Inspector view: this window displays information (i.e., properties) on the object currently selected.

5.  The Project window: this window includes all the assets available and used for your project. These include 3D models, sounds, or textures.

6.  The Console window: this window displays messages either printed from the code by the user (using keywords) or by Unity. These include warnings or error messages related to your project or code. In our current view, this is hidden, but we’ll get back to it later. It’s not important to go over for now.

![](../assets/img/module3/module3-interfacebasics.png)

## Introduction to “Assets”

“Asset” is a term that Unity uses to refer to basically any file that can be placed in the Project view.

Unity is the program that takes the sound file of a car engine, a 3D model of a car, and an image of the car’s paint and puts it all together in a scene that can be made into an interactive app.

That car, that sound, the image, all are files just like any other file on the computer! The Project view is literally just a folder. Navigate to where you set the location for your project when you hit “New Project” in the first step. You’ll see a folder named assets in the project folder, this is it. The Project view is basically just a view of the files in this folder. Keep this open.

But you’ll see that when our project is first made, the Project view is completely empty. It’s like a potter’s wheel with no clay on it. First we have to find some clay we want to make the game out of.

Luckily, Unity has made some “Standard Assets” to get us started with. As you’ll see, everything is contained within the “Asset” folder that you navigated to previously. The term for “thing” or “individual file” Unity uses is “Asset.”

Now let's get started with importing some packages! Navigate to Assets > Import Package

![](../assets/img/module3/module3-importpackages.png)

First we will import the Characters package.

Then we import the Environment package.

Now check back in on your file system folder (outside Unity). You should see now that it is populated with some files!

## Homework: Asset Collection

We will be demonstrating how Unity incorporates all kinds of files in the next section. To give it a personal touch, bring in your own files into your game. Collect the following:

1.  Choose a music files you have got from a safe place, be aware of copyright!
2.  A picture of yourself.
3.  A picture of any pattern. This can be a quilt from Google Images or a picture of a cloth pattern, anything that is consistent for the whole image. Be aware of copyright!
